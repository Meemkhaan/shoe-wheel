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
  heel_lift_right: any;
  heel_lift_left: any;
  reinforced_arch_right: any;
  reinforced_arch_left: any;
  rear_foot_posting_right: any;
  rear_foot_posting_left: any;
  navicular_pac_right: any;
  navicular_pac_left: any;
  scaphoid_pad_right: any;
  scaphoid_pad_left: any;
  reverse_morton_extension_right: any;
  reverse_morton_extension_left: any;
  morton_extension_right: any;
  morton_extension_left: any;


  constructor(private FormBuilder: FormBuilder) {}
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
    this.high_medial_flang_right = localStorage.getItem('high_medial_flang_right');
    this.high_medial_flang_left = localStorage.getItem('high_medial_flang_left');
    this.heel_lift_right = localStorage.getItem('heel_lift_right');
    this.heel_lift_left = localStorage.getItem('heel_lift_left');
    this.reinforced_arch_right = localStorage.getItem('reinforced_arch_right');
    this.reinforced_arch_left = localStorage.getItem('reinforced_arch_left');
    this.rear_foot_posting_right = localStorage.getItem('rear_foot_posting_right');
    this.rear_foot_posting_left = localStorage.getItem('rear_foot_posting_left');
    this.navicular_pac_right = localStorage.getItem('navicular_pac_right');
    this.navicular_pac_left = localStorage.getItem('navicular_pac_left');
    this.scaphoid_pad_right = localStorage.getItem('scaphoid_pad_right');
    this.scaphoid_pad_left = localStorage.getItem('scaphoid_pad_left');
    this.reverse_morton_extension_right = localStorage.getItem('reverse_morton_extension_right');
    this.reverse_morton_extension_left = localStorage.getItem('reverse_morton_extension_left');
    this.morton_extension_right = localStorage.getItem('morton_extension_right');
    this.morton_extension_left = localStorage.getItem('morton_extension_left');


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
        $('#high-medial-flang > .item').show();
      } else if (activatedRoute.match('heel-lift')) {
        $('#heel-lift > .item').show();
      } else if (activatedRoute.match('reinforced-arch')) {
        $('#reinforced-arch > .item').show();
      } else if (activatedRoute.match('rear-foot-posting')) {
        $('#rear-foot-posting > .item').show();
      } else if (activatedRoute.match('navicular-pac')) {
        $('#navicular-pac > .item').show();
      } else if (activatedRoute.match('scaphoid-pad')) {
        $('#scaphoid-pad > .item').show();
      } else if (activatedRoute.match('reverse-morton-extension')) {
        $('#reverse-morton-extension > .item').show();
      } else if (activatedRoute.match('mortons-extension')) {
        $('#mortons-extension > .item').show();
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
  test(value: any, options: any) {
    value > 0
      ? localStorage.setItem(`${options}`, value)
      : localStorage.removeItem(`${options}`);
  }
  heel_spur_pad_left_change(value: any) {
    this.test(value, 'heel_spur_pad_left');
  }
  heel_spur_pad_right_change(value: any) {
    this.test(value, 'heel_spur_pad_right');
  }

  heel_cusion_right_change(value: any) {
    this.test(value, 'heel_cusion_right');
  }

  heel_cusion_left_change(value: any) {
    this.test(value, 'heel_cusion_left');
  }

  met_pad_right_change(value: any) {
    this.test(value, 'met_pad_right');
  }
  met_pad_left_change(value: any) {
    this.test(value, 'met_pad_left');
  }

  bet_bar_pad_right_change(value: any) {
    this.test(value, 'bet_bar_pad_right');
  }

  bet_bar_pad_left_change(value: any) {
    this.test(value, 'bet_bar_pad_left');
  }

  letral_clip_right_change(value: any) {
    this.test(value, 'letral_clip_right');
  }

  letral_clip_left_change(value: any) {
    this.test(value, 'letral_clip_left');
  }

  toe_crest_right_change(value: any) {
    this.test(value, 'toe_crest_right');
  }

  toe_crest_left_change(value: any) {
    this.test(value, 'toe_crest_left');
  }

  cubiod_pad_right_change(value: any) {
    this.test(value, 'cubiod_pad_right');
  }

  cubiod_pad_left_change(value: any) {
    this.test(value, 'cubiod_pad_left');
  }

  high_medial_flang_right_change(value: any) {
    this.test(value, 'high_medial_flang_right');
  }

  high_medial_flang_left_change(value: any) {
    this.test(value, 'high_medial_flang_left');
  }

  heel_lift_right_change(value: any) {
    this.test(value, 'heel_lift_right');
  }

  heel_lift_left_change(value: any) {
    this.test(value, 'heel_lift_left');
  }
  reinforced_arch_right_change(value: any) {
    this.test(value, 'reinforced_arch_right');
  }

  reinforced_arch_left_change(value: any) {
    this.test(value, 'reinforced_arch_left');
  }
  rear_foot_posting_right_change(value: any) {
    this.test(value, 'rear_foot_posting_right');
  }

  rear_foot_posting_left_change(value: any) {
    this.test(value, 'rear_foot_posting_left');
  }

  navicular_pac_right_change(value: any) {
    this.test(value, 'navicular_pac_right');
  }

  navicular_pac_left_change(value: any) {
    this.test(value, 'navicular_pac_left');
  }

  scaphoid_pad_right_change(value: any) {
    this.test(value, 'scaphoid_pad_right');
  }

  scaphoid_pad_left_change(value: any) {
    this.test(value, 'scaphoid_pad_left');
  }
  reverse_morton_extension_right_change(value: any) {
    this.test(value, 'reverse_morton_extension');
  }

  reverse_morton_extension_left_change(value: any) {
    this.test(value, 'reverse_morton_extension_left');
  }
  
  morton_extension_right_change(value: any) {
    this.test(value, 'morton_extension_right');
  }

  morton_extension_left_change(value: any) {
    this.test(value, 'morton_extension_left');
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
