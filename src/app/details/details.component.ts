import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Aos from 'aos';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  options: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    Aos.init();
    $(function () {
      $('.item').css('display', 'none');
      let activatedRoute = window.location.pathname;
      if (activatedRoute.match('topcovers')) {
        $('#topcovers > .item').removeAttr('style');
      } else if (activatedRoute.match('middlelayer')) {
        $('#middlayer > .item').removeAttr('style');
      } else if (activatedRoute.match('shell')){
        $('#shell > .item').removeAttr('style');
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
