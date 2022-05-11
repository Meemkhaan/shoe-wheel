import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth-layer-options',
  templateUrl: './fourth-layer-options.component.html',
  styleUrls: ['./fourth-layer-options.component.css'],
})
export class FourthLayerOptionsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $(function () {
      $('.item').hide();
      let activatedRoute = window.location.pathname;
      if (activatedRoute.match('deep-heel-cup')) {
        $('#deep-heel > .item').show();
      } else if (activatedRoute.match('length')) {
        $('#length > .item').show();
      } else if (activatedRoute.match('cusion')) {
        $('#cusion > .item').show();
      } else if (activatedRoute.match('types-of-sheel')) {
        $('#sheel-types > .item').show();
      }

      let radius = 250;
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
    });
  }
}
