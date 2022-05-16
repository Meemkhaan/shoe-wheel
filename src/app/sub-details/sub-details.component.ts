import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-sub-details',
  templateUrl: './sub-details.component.html',
  styleUrls: ['./sub-details.component.css'],
})
export class SubDetailsComponent implements OnInit {
  tc_vinyl: any;
  tc_sports: any;
  tc_microcell: any;
  tc_leather: any;
  tc_evaperferated: any;
  tc_xstatic: any;
  tc_suedo: any;
  modifications_step_one:boolean = true;
  modifications_step_two:boolean = false;
  modifications_step_three:boolean = false;
  constructor(private FormBuilder: FormBuilder) {}
  thirdLayerOptions!: FormGroup;
  ngOnInit() {
    this.tc_vinyl = localStorage.getItem('tc_vinyl_options');
    this.tc_sports = localStorage.getItem('tc_sports_options');
    this.tc_microcell = localStorage.getItem('tc_microcell_options');
    this.tc_leather = localStorage.getItem('tc_leather_options');
    this.tc_evaperferated = localStorage.getItem('tc_evaperferated_options');
    this.tc_xstatic = localStorage.getItem('tc_xstatic_options');
    this.tc_suedo = localStorage.getItem('tc_suedo_options');

  

    $(function () {
      $('.item').hide();
      let activatedRoute = window.location.pathname;
      if (activatedRoute.match('tc-vinyl')) {
        $('#vinyl > .item').show();
      } else if (activatedRoute.match('tc-sports')) {
        $('#sports > .item').show();
      } else if (activatedRoute.match('tc-microcell')) {
        $('#microcell > .item').show();
      } else if (activatedRoute.match('tc-leather')) {
        $('#leather > .item').show();
      } else if (activatedRoute.match('tc-evaperferated')) {
        $('#evaperferated > .item').show();
      } else if (activatedRoute.match('tc-xstatic')) {
        $('#xstatic > .item').show();
      } else if (activatedRoute.match('tc-sudeo')) {
        $('#suedo > .item').show();
      }

      if (activatedRoute.match('mi--vinyl')) {
        $('#mi-vinyl > .item').show();
      } else if (activatedRoute.match('mi--suede')) {
        $('#mi-suede > .item').show();
      } else if (activatedRoute.match('mi--microcell')) {
        $('#mi-microcell > .item').show();
      }

      if (activatedRoute.match('sheel-types-cushion')) {
        $('#sheel-types-cushion > .item').show();
      }

      let radius = 270;
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

  onItemChange(value: any) {
    this.tc_vinyl = value;
    localStorage.setItem('tc_vinyl_options', this.tc_vinyl);
  }

  onItemChange1(value: any) {
    this.tc_sports = value;
    localStorage.setItem('tc_sports_options', this.tc_sports);
  }

  onItemChange2(value: any) {
    this.tc_microcell = value;
    localStorage.setItem('tc_microcell_options', this.tc_microcell);
  }

  onItemChange3(value: any) {
    this.tc_leather = value;
    localStorage.setItem('tc_leather_options', this.tc_leather);
  }

  onItemChange4(value: any) {
    this.tc_evaperferated = value;
    localStorage.setItem('tc_evaperferated_options', this.tc_evaperferated);
  }

  onItemChange5(value: any) {
    this.tc_xstatic = value;
    localStorage.setItem('tc_xstatic_options', this.tc_xstatic);
  }

  onItemChange6(value: any) {
    this.tc_suedo = value;
    localStorage.setItem('tc_sudeo_options', this.tc_suedo);
  }

  //
  tc_vinyl_options = [
    { id: 1, value: 'Black' },
    { id: 2, value: 'Navy' },
    { id: 3, value: 'Brown' },
    { id: 4, value: 'Red' },
    { id: 5, value: 'Grey' },
  ];

  tc_sports_options = [
    { id: 1, value: 'Black' },
    { id: 2, value: 'Navy' },
    { id: 3, value: 'Green' },
    { id: 4, value: 'Red' },
    { id: 5, value: 'Bamboo' },
  ];

  tc_microcell_options = [
    { id: 1, value: 'Black' },
    { id: 2, value: 'Navy' },
    { id: 3, value: 'Red' },
    { id: 4, value: 'Green' },
    { id: 5, value: 'Brown' },
    { id: 6, value: 'Yellow' },
  ];

  tc_leather_options = [
    { id: 1, value: 'Black' },
    { id: 2, value: 'Navy' },
    { id: 3, value: 'Green' },
  ];

  tc_evaperferated_options = [
    { id: 1, value: 'Black' },
    { id: 2, value: 'Navy' },
  ];

  tc_suedo_options = [
    { id: 1, value: 'Black' },
    { id: 2, value: 'Tan' },
    { id: 3, value: 'Brown' },
  ];
}
