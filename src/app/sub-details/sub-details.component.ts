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
  // Modifications
  heel_spur_pad_right: any;
  heel_spur_pad_left: any;
  heel_cusion_right: any;
  heel_cusion_left: any;
  met_pad_left: any;
  met_pad_right: any;
  bet_bar_pad_left: any;
  bet_bar_pad_right: any;
  letral_clip_right: any;
  letral_clip_left: any;
  toe_crest_right: any;
  toe_crest_left: any;
  cubiod_pad_right: any;
  cubiod_pad_left: any;
  high_medial_flang_right: any;
  high_medial_flang_left: any;
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
    // Modifications
    this.heel_spur_pad_right = localStorage.getItem('heel_spur_pad_right');
    this.heel_spur_pad_left = localStorage.getItem('heel_spur_pad_left');
    this.heel_cusion_right = localStorage.getItem('heel_cusion_right');
    this.heel_cusion_left = localStorage.getItem('heel_cusion_left');
    this.met_pad_right = localStorage.getItem('met_pad_right');
    this.met_pad_left = localStorage.getItem('met_pad_left');
    this.bet_bar_pad_right = localStorage.getItem('bet_bar_pad_right');
    this.bet_bar_pad_left = localStorage.getItem('bet_bar_pad_left');
    this.letral_clip_right = localStorage.getItem('letral_clip_right');
    this.letral_clip_left = localStorage.getItem('letral_clip_left');
    this.toe_crest_right = localStorage.getItem('toe_crest_right');
    this.toe_crest_left = localStorage.getItem('toe_crest_left');
    this.high_medial_flang_right = localStorage.getItem(
      'high_medial_flang_right'
    );
    this.high_medial_flang_left = localStorage.getItem(
      'high_medial_flang_left'
    );
    $(function () {
      $('.item').hide();
      let activatedRoute = window.location.pathname;
      //
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
      //
      if (activatedRoute.match('mi--vinyl')) {
        $('#mi-vinyl > .item').show();
      } else if (activatedRoute.match('mi--suede')) {
        $('#mi-suede > .item').show();
      } else if (activatedRoute.match('mi--microcell')) {
        $('#mi-microcell > .item').show();
      }
      //
      if (activatedRoute.match('sheel-types-cushion')) {
        $('#sheel-types-cushion > .item').show();
      }

      // Modifications
      if (activatedRoute.match('heel-spur-pad')) {
        $('#heel-spur-pad > .item').show();
      } else if (activatedRoute.match('heel-cusion')) {
        $('#heel-cusion > .item').show();
      } else if (activatedRoute.match('met-pad')) {
        $('#met-pad > .item').show();
      } else if (activatedRoute.match('bet-bar-pad')) {
        $('#bet-bar-pad > .item').show();
      } else if (activatedRoute.match('letral-clip')) {
        $('#letral-clip > .item').show();
      } else if (activatedRoute.match('toe-crest')) {
        $('#toe-crest > .item').show();
      } else if (activatedRoute.match('cubiod-pad')) {
        $('#cubiod-pad > .item').show();
      } else if (activatedRoute.match('high-medial-flang')) {
      } else if (activatedRoute.match('')) {
      } else if (activatedRoute.match('')) {
      } else if (activatedRoute.match('')) {
      } else if (activatedRoute.match('')) {
      } else if (activatedRoute.match('')) {
      } else if (activatedRoute.match('')) {
      } else if (activatedRoute.match('')) {
      } else if (activatedRoute.match('')) {
      } else if (activatedRoute.match('')) {
      } else if (activatedRoute.match('')) {
      } else if (activatedRoute.match('')) {
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

  // Modifications
  heel_spur_pad_left_change(value: any) {
    this.heel_spur_pad_left = value;
    value > 0
      ? localStorage.setItem('heel_spur_pad_left', this.heel_spur_pad_left)
      : localStorage.removeItem('heel_spur_pad_left');
  }

  heel_spur_pad_right_change(value: any) {
    this.heel_spur_pad_right = value;

    value > 0
      ? localStorage.setItem('heel_spur_pad_right', this.heel_spur_pad_right)
      : localStorage.removeItem('heel_spur_pad_right');
  }

  heel_cusion_right_change(value: any) {
    this.heel_cusion_right = value;
    value > 0
      ? localStorage.setItem('heel_cusion_right', this.heel_cusion_right)
      : localStorage.removeItem('heel_cusion_right');
  }

  heel_cusion_left_change(value: any) {
    this.heel_cusion_left = value;

    value > 0
      ? localStorage.setItem('heel_cusion_left', this.heel_cusion_left)
      : localStorage.removeItem('heel_cusion_left');
  }

  met_pad_right_change(value: any) {
    this.met_pad_right = value;
    value > 0
      ? localStorage.setItem('met_pad_right', this.met_pad_right)
      : localStorage.removeItem('met_pad_right');
  }

  met_pad_left_change(value: any) {
    this.met_pad_left = value;

    value > 0
      ? localStorage.setItem('met_pad_left', this.met_pad_left)
      : localStorage.removeItem('met_pad_left');
  }

  bet_bar_pad_right_change(value: any) {
    this.bet_bar_pad_right = value;
    value > 0
      ? localStorage.setItem('bet_bar_pad_right', this.bet_bar_pad_right)
      : localStorage.removeItem('bet_bar_pad_right');
  }

  bet_bar_pad_left_change(value: any) {
    this.bet_bar_pad_left = value;

    value > 0
      ? localStorage.setItem('bet_bar_pad_left', this.bet_bar_pad_left)
      : localStorage.removeItem('bet_bar_pad_left');
  }

  letral_clip_right_change(value: any) {
    this.letral_clip_right = value;
    value > 0
      ? localStorage.setItem('letral_clip_right', this.letral_clip_right)
      : localStorage.removeItem('bet_bar_pad_right');
  }

  letral_clip_left_change(value: any) {
    this.letral_clip_left = value;

    value > 0
      ? localStorage.setItem('letral_clip_left', this.letral_clip_left)
      : localStorage.removeItem('letral_clip_left');
  }

  toe_crest_right_change(value: any) {
    this.toe_crest_right = value;
    value > 0
      ? localStorage.setItem('toe_crest_right', this.toe_crest_right)
      : localStorage.removeItem('toe_crest_right');
  }

  toe_crest_left_change(value: any) {
    this.toe_crest_left = value;

    value > 0
      ? localStorage.setItem('toe_crest_left', this.toe_crest_left)
      : localStorage.removeItem('toe_crest_left');
  }

  cubiod_pad_right_change(value: any) {
    this.cubiod_pad_right = value;
    value > 0
      ? localStorage.setItem('cubiod_pad_right', this.cubiod_pad_right)
      : localStorage.removeItem('cubiod_pad_right');
  }

  cubiod_pad_left_change(value: any) {
    this.cubiod_pad_left = value;

    value > 0
      ? localStorage.setItem('cubiod_pad_left', this.cubiod_pad_left)
      : localStorage.removeItem('cubiod_pad_left');
  }

  
  high_medial_flang_right_change(value: any) {
    this.cubiod_pad_right = value;
    value > 0
      ? localStorage.setItem('cubiod_pad_right', this.cubiod_pad_right)
      : localStorage.removeItem('cubiod_pad_right');
  }

  high_medial_flang_left_change(value: any) {
    this.cubiod_pad_left = value;

    value > 0
      ? localStorage.setItem('cubiod_pad_left', this.cubiod_pad_left)
      : localStorage.removeItem('cubiod_pad_left');
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
