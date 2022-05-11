import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-sub-details',
  templateUrl: './sub-details.component.html',
  styleUrls: ['./sub-details.component.css'],
})
export class SubDetailsComponent implements OnInit {
  constructor() {}
  
  ngOnInit() {
    $(function () {
      $('.item').hide();

      let activatedRoute = window.location.pathname;
      //! ALL TOPCOVERS FIELDS CONDITION BASED ON ROUTE PARAM
      if (activatedRoute.match('tc-vinyl')) {
        console.log("mathceddd");
        
        $('#vinyl > .item').hide();
      } else if (activatedRoute.match('tc-sports')) {
        $('#sports > .item').hide();
      } else if (activatedRoute.match('tc-microcell')) {
        $('#microcell > .item').hide();
      } else if (activatedRoute.match('tc-leather')) {
        $('#leather > .item').hide();
      } else if (activatedRoute.match('tc-evaperferated')) {
        $('#evaperferated > .item').hide();
      } else if (activatedRoute.match('tc-xstatic')) {
        $('#xstatic > .item').hide();
      } else if (activatedRoute.match('tc-sudeo')) {
        $('#suedo > .item').hide();
      }
      //! ALL MIDDLE LAYER FIELDS CONDITION BASED ON ROUTE PARAM
      if (activatedRoute.match('mi--vinyl')) {
        $('#mi-vinyl > .item').hide();
      } else if (activatedRoute.match('mi--suede')){
        $('#mi-suede > .item').hide();
      } else if (activatedRoute.match('mi--microcell')){
        $('#mi-microcell > .item').hide();
      }

      //! ALL SHEEL TYPES AND CUSION FIELDS BASED ON ROUTE PARAM

      if(activatedRoute.match('sheel-types-cushion')){
        $('#sheel-types-cushion > .item').hide();
      }

      let radius = 250;
      let fields = $('.item'),
        fieldslenght: any = fields.length,
        container = $('#container'),
        width = container.width(),
        height = container.height();
      let data: any = fields.filter(function () {
        return $(this).css('display') !== 'none';
      });
      fieldslenght = data.length;
      let angle = 0,
        step = (2 * Math.PI) / fieldslenght;
      fields.each(function () {
        let x = Math.round(
          width! / 2 + radius * Math.cos(angle) - $(this).width()! / 2
        );
        let y = Math.round(
          height! / 2 + radius * Math.sin(angle) - $(this).height()! / 2
        );
        $(this).css({
          left: x + 'px',
          top: y + 'px',
        });
        angle += step;
      });
    });
  }
  onItemChange(value:any){
    console.log(value );
 }
}