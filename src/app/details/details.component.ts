import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  options: any;
  class = 'col-md-12';
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    $('.item').hide();
    let activatedRoute = window.location.pathname;
    if (activatedRoute.match('topcovers')) {
      $('#topcovers > .item').show();
    } else if (activatedRoute.match('middlelayer')) {
      $('#middlayer > .item').show();
    } else if (activatedRoute.match('shell')) { 
      $('#shell > .item').show();
    } else if (activatedRoute.match('modifications')) {
      let currentTab = 1;
      $('#modification1 > .item').show();
     
      $('.nextBtn').click(function (e) {
        if (currentTab < 3) {
          $('.modifications > .item').hide();
          currentTab++;
          $(`#modification${currentTab} > .item`).show();
        }
      });

      $('.prevBtn').click(function (e) {
        if(currentTab > 1){
          $('.modifications > .item').hide();
          currentTab--;
          $(`#modification${currentTab} > .item`).show();
        }
      })
      
    }

    let radius = 270;
    let fields = $('.item'),
      fieldslenght: any = fields.length,
      container = $('#container'),
      width = container.width(),
      height = container.height();
    // checking if item have dsiplay none css property then remove ot from fields length
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
  }
}
