import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  ngOnInit() {
    $(function () {
      let radius = 240;
      let fields = $('.item'),
        fieldslenght: any = fields.length,
        container = $('#container'),
        width = container.width(),
        height = container.height();
        // checking if item have dsiplay none css property then remove ot from fields length
        let data: any = fields.filter(function () {
          return $(this).css('display') !== 'none';
        });
        fieldslenght =  data.length ;
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


    // Click event logic
    // $(function () {
    //   var $curr = $( "#previous" );
    //   $curr.css( "display", "none" );
    //   $(".topcovers").click(function () {
    //    $("#initial > .item").css({
    //     "display": "none",
    //    })

    //    $("#topcovers > .item").css({
    //     "display": "block" 
    //    })

    //    $("#previous").click(function () {
    //     $curr = $curr.prev();
    //    })
    //   })

    // });

  }
}
