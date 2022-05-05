import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-details',
  templateUrl: './sub-details.component.html',
  styleUrls: ['./sub-details.component.css'],
})
export class SubDetailsComponent implements OnInit {
  constructor() {}
 tested = false;
  ngOnInit() {
    $(function () {
      // TODO: ADD CONDITIONL CLASS OF NG CLASS INSTEAD OF THIS JQUERY CODE
      let activatedRoute = window.location.pathname;

      if (activatedRoute.includes('vinyl')) {
        $('#vinyl > .item').removeAttr('style');
        $(`#sports > .item,
          #microcell > .item,
          #leather > .item,
          #evaperferated > .item,
          #xstatic > .item,
          #suedo > .item
          `).css('display', 'none');
      }
      else if (activatedRoute.includes('sports')) {
        $('#sports > .item').removeAttr('style');
        $(`#vinyl > .item,
          #microcell > .item,
          #leather > .item,
          #evaperferated > .item,
          #xstatic > .item,
          #suedo > .item
          `).css('display', 'none');
      }
      else if (activatedRoute.includes('microcell')) {
        $('#microcell > .item').removeAttr('style');
        $(`#sports > .item,
          #vinyl > .item,
          #leather > .item,
          #evaperferated > .item,
          #xstatic > .item,
          #suedo > .item
          `).css('display', 'none');
      }
      else if (activatedRoute.includes('leather')) {
        $('#leather > .item').removeAttr('style');
        $(`#sports > .item,
          #microcell > .item,
          #vinyl > .item,
          #evaperferated > .item,
          #xstatic > .item,
          #suedo > .item
          `).css('display', 'none');
      }
      else if (activatedRoute.includes('evaperferated')) {
        $('#evaperferated > .item').removeAttr('style');
        $(`#sports > .item,
          #microcell > .item,
          #vinyl > .item,
          #leather > .item,
          #xstatic > .item,
          #suedo > .item
          `).css('display', 'none');
      }
      else if (activatedRoute.includes('xstatic')) {
        $('#xstatic > .item').removeAttr('style');
        $(`#sports > .item,
          #microcell > .item,
          #vinyl > .item,
          #leather > .item,
          #evaperferated > .item,
          #suedo > .item
          `).css('display', 'none');
      }
      else if (activatedRoute.includes('sudeo')) {
        $('#suedo > .item').removeAttr('style');
        $(`#sports > .item,
          #microcell > .item,
          #vinyl > .item,
          #leather > .item,
          #evaperferated > .item,
          #xstatic > .item
          `).css('display', 'none');
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
}
