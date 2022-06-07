import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  options: any;
  currentTab: any;
  class = 'col-md-12';
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    $('.item').css({
      "visibility": "hidden",
      "transition": "opacity 100ms ease",
      "opacity:": "0"
    });
    let activatedRoute = window.location.pathname;
    if (activatedRoute.match('topcovers')) {
      $('#topcovers > .item').css('visibility', 'visible');
    } else if (activatedRoute.match('middlelayer')) {
      $('#middlayer > .item').css('visibility', 'visible');
    } else if (activatedRoute.match('shell')) {
      $('#shell > .item').css('visibility', 'visible');
    } else if (activatedRoute.match('modifications')) {
      let currentTab: any;
      if (localStorage.getItem('step') !== null) {
        currentTab = localStorage.getItem('step');
        if (localStorage.getItem('step') == '1') {
          $('#modification1 > .item').css('visibility', 'visible');
        } else if (localStorage.getItem('step') == '2') {
          $('#modification2 > .item').css('visibility', 'visible');
        } else if (localStorage.getItem('step') == '3') {
          $('#modification3 > .item').css('visibility', 'visible');
        }
      } else {
        $('#modification1 > .item').css('visibility', 'visible');
        currentTab = 1;
      }
      $('.nextBtn').click(function (e) {
        if (currentTab < 3) {
          hidefunc('modifications', 'item')
          currentTab++;
          localStorage.setItem('step', `${currentTab}`);
          showfunc(`modification${currentTab}`, 'item')
        }
      });

      $('.prevBtn').click(function (e) {
        if (currentTab > 1) {
          hidefunc('modifications', 'item')
          currentTab--;
          localStorage.setItem('step', `${currentTab}`);
          showfunc(`modification${currentTab}`, 'item')
        }
      });
    }

    let radius = 270;
    let fields = $('.item'),
      fieldslenght: any = fields.length,
      container = $('#container'),
      width = container.width(),
      height = container.height();
    // checking if item have dsiplay none css property then remove ot from fields length
    let data: any = fields.filter(function () {
      return $(this).css('visibility') !== 'hidden';
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

    function hidefunc(data:any, data2:any) {
      $(`.${data} > .${data2}`).css({
      "visibility": "hidden",
      "transition": "opacity 100ms ease",
      "opacity:": "0"
    })
    }

    function showfunc(data:any, data2:any) {
      $(`#${data} > .${data2}`).css({
      "visibility": "visible",
      "transition": "opacity 100ms ease",
      "opacity:": "1"
    })
    }
  }

}
