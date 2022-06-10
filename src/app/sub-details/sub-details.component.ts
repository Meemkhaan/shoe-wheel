import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

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
  met_pad_right_no: any;
  met_bar_pad_left_no: any;
  met_bar_pad_right_no: any;
  letral_clip_right: any;
  letral_clip_left: any;
  toe_crest_right: any;
  toe_crest_left: any;
  cuboid_pad_right: any;
  cuboid_pad_left: any;
  high_medial_flang_right: any;
  high_medial_flang_left: any;
  heel_lift_right_no: any;
  heel_lift_left_no: any;
  reinforced_arch_right: any;
  reinforced_arch_left: any;
  rear_foot_posting_right: any;
  rear_foot_posting_left: any;
  navicular_pad_right: any;
  navicular_pad_left: any;
  scaphoid_pad_right: any;
  scaphoid_pad_left: any;
  reverse_morton_extension_right: any;
  reverse_morton_extension_left: any;
  morton_extension_right: any;
  morton_extension_left: any;
  u_cut_out_right_no: any;
  u_cut_out_left_no: any;
  extrensic_fore_foot_position_right_no: any;
  extrensic_fore_foot_position_left_no: any;
  extrensic_rare_foot_position_right_no: any;
  extrensic_rare_foot_position_left_no: any;
  // MIDDLE LAYER 
  mi_suede: any;
  mi_vinyl: any;
  mi_microcell: any;
  constructor() {}
  ngOnInit() {
    this.tc_vinyl = localStorage.getItem('tc_vinyl');
    this.tc_sports = localStorage.getItem('tc_sports');
    this.tc_microcell = localStorage.getItem('tc_microcell');
    this.tc_leather = localStorage.getItem('tc_leather_choices');
    this.tc_evaperferated = localStorage.getItem('tc_eva_perfeated');
    this.tc_xstatic = localStorage.getItem('tc_x_static');
    this.tc_suedo = localStorage.getItem('tc_suedo');
    // Modifications
    this.heel_spur_pad_right = localStorage.getItem('heel_spur_pad_right');
    this.heel_spur_pad_left = localStorage.getItem('heel_spur_pad_left');
    this.heel_cusion_right = localStorage.getItem('heel_cusion_right');
    this.heel_cusion_left = localStorage.getItem('heel_cusion_left');
    this.met_pad_right_no = localStorage.getItem('met_pad_right_no');
    this.met_pad_left = localStorage.getItem('met_pad_left');
    this.met_bar_pad_right_no = localStorage.getItem('met_bar_pad_right_no');
    this.met_bar_pad_left_no = localStorage.getItem('met_bar_pad_left_no');
    this.letral_clip_right = localStorage.getItem('letral_clip_right');
    this.letral_clip_left = localStorage.getItem('letral_clip_left');
    this.toe_crest_right = localStorage.getItem('toe_crest_right');
    this.toe_crest_left = localStorage.getItem('toe_crest_left');
    this.cuboid_pad_right = localStorage.getItem('cuboid_pad_right');
    this.cuboid_pad_left = localStorage.getItem('cuboid_pad_left');
    this.high_medial_flang_right = localStorage.getItem(
      'high_medial_flang_right'
    );
    this.high_medial_flang_left = localStorage.getItem(
      'high_medial_flang_left'
    );
    this.heel_lift_right_no = localStorage.getItem('heel_lift_right_no');
    this.heel_lift_left_no = localStorage.getItem('heel_lift_left_no');
    this.reinforced_arch_right = localStorage.getItem('reinforced_arch_right');
    this.reinforced_arch_left = localStorage.getItem('reinforced_arch_left');
    this.rear_foot_posting_right = localStorage.getItem(
      'rear_foot_posting_right'
    );
    this.rear_foot_posting_left = localStorage.getItem(
      'rear_foot_posting_left'
    );
    this.navicular_pad_right = localStorage.getItem('navicular_pad_right');
    this.navicular_pad_left = localStorage.getItem('navicular_pad_left');
    this.scaphoid_pad_right = localStorage.getItem('scaphoid_pad_right');
    this.scaphoid_pad_left = localStorage.getItem('scaphoid_pad_left');
    this.reverse_morton_extension_right = localStorage.getItem(
      'reverse_morton_extension_right'
    );
    this.reverse_morton_extension_left = localStorage.getItem(
      'reverse_morton_extension_left'
    );
    this.morton_extension_right = localStorage.getItem(
      'morton_extension_right'
    );
    this.morton_extension_left = localStorage.getItem('morton_extension_left');
    this.u_cut_out_right_no = localStorage.getItem('u_cut_out_right_no');
    this.u_cut_out_left_no = localStorage.getItem('u_cut_out_left_no');
    this.extrensic_fore_foot_position_right_no = localStorage.getItem(
      'extrensic_fore_foot_position_right_no'
    );
    this.extrensic_fore_foot_position_left_no = localStorage.getItem(
      'extrensic_fore_foot_position_left_no'
    );
    this.extrensic_rare_foot_position_right_no = localStorage.getItem(
      'extrensic_rare_foot_position_right_no'
    );
    this.extrensic_rare_foot_position_left_no = localStorage.getItem(
      'extrensic_rare_foot_position_left_no'
    );
    // MIDDLE LAYER 
    this.mi_suede = localStorage.getItem('tu_suede');
    this.mi_vinyl = localStorage.getItem('tu_vinyl');
    this.mi_microcell = localStorage.getItem('tu_microsell');

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
      } else if (activatedRoute.match('u-cut-out')) {
        $('#u-cut-out > .item').show();
      } else if (activatedRoute.match('extrensic-fore-foot-position')) {
        $('#extrensic-fore-foot-position > .item').show();
      } else if (activatedRoute.match('extrensic-rare-foot-position')) {
        $('#extrensic-rare-foot-position > .item').show();
      }
      // Sheel Modifications
      if (activatedRoute.match('sheel-modifications')) {
        $('#sheel-modifications > .item').show();
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
    localStorage.setItem('tc_vinyl', this.tc_vinyl);
  }

  onItemChange1(value: any) {
    this.tc_sports = value;
    localStorage.setItem('tc_sports', this.tc_sports);
  }

  onItemChange2(value: any) {
    this.tc_microcell = value;
    localStorage.setItem('tc_microcell', this.tc_microcell);
  }

  onItemChange3(value: any) {
    this.tc_leather = value;
    localStorage.setItem('tc_leather_choices', this.tc_leather);
  }

  onItemChange4(value: any) {
    this.tc_evaperferated = value;
    localStorage.setItem('tc_eva_perfeated', this.tc_evaperferated);
  }

  onItemChange5(value: any) {
    this.tc_xstatic = value;
    localStorage.setItem('tc_x_static', this.tc_xstatic);
  }

  onItemChange6(value: any) {
    this.tc_suedo = value;
    localStorage.setItem('tc_suedo', this.tc_suedo);
  }

  // Modifications
  test(value: any, options: any) {
    value > 0
      ? localStorage.setItem(`${options}`, value)
      : localStorage.removeItem(`${options}`);
  }
  test2(value: any, options: any) {
    value == true
      ? localStorage.setItem(`${options}`, value)
      : localStorage.removeItem(`${options}`);
  }
  heel_spur_pad_left_change(value: any) {
    this.test2(value.target.checked, 'heel_spur_pad_left');
  }
  heel_spur_pad_right_change(value: any) {
    this.test2(value.target.checked, 'heel_spur_pad_right');
  }

  heel_cusion_right_change(value: any) {
    this.test2(value.target.checked, 'heel_cusion_right');
  }

  heel_cusion_left_change(value: any) {
    this.test2(value.target.checked, 'heel_cusion_left');
  }

  met_pad_right_no_change(value: any) {
    this.test(value, 'met_pad_right_no');
  }
  met_pad_left_change(value: any) {
    this.test(value, 'met_pad_left');
  }

  met_bar_pad_right_no_change(value: any) {
    this.test(value, 'met_bar_pad_right_no');
  }

  met_bar_pad_left_no_change(value: any) {
    this.test(value, 'met_bar_pad_left_no');
  }

  letral_clip_right_change(value: any) {
    this.test2(value.target.checked, 'letral_clip_right');
  }

  letral_clip_left_change(value: any) {
    this.test2(value.target.checked, 'letral_clip_left');
  }

  toe_crest_right_change(value: any) {
    this.test2(value.target.checked, 'toe_crest_right');
  }

  toe_crest_left_change(value: any) {
    this.test2(value.target.checked, 'toe_crest_left');
  }

  cuboid_pad_right_change(value: any) {
    this.test2(value.target.checked, 'cuboid_pad_right');
  }

  cuboid_pad_left_change(value: any) {
    this.test2(value.target.checked, 'cuboid_pad_left');
  }

  high_medial_flang_right_change(value: any) {
    this.test2(value.target.checked, 'high_medial_flang_right');
  }

  high_medial_flang_left_change(value: any) {
    this.test2(value.target.checked, 'high_medial_flang_left');
  }

  heel_lift_right_no_change(value: any) {
    this.test(value, 'heel_lift_right_no');
  }

  heel_lift_left_no_change(value: any) {
    this.test(value, 'heel_lift_left_no');
  }
  reinforced_arch_right_change(value: any) {
    this.test2(value.target.checked, 'reinforced_arch_right');
  }

  reinforced_arch_left_change(value: any) {
    this.test2(value.target.checked, 'reinforced_arch_left');
  }
  rear_foot_posting_right_change(value: any) {
    this.test2(value.target.checked, 'rear_foot_posting_right');
  }

  rear_foot_posting_left_change(value: any) {
    this.test2(value.target.checked, 'rear_foot_posting_left');
  }

  navicular_pad_right_change(value: any) {
    this.test2(value.target.checked, 'navicular_pad_right');
  }

  navicular_pad_left_change(value: any) {
    this.test2(value.target.checked, 'navicular_pad_left');
  }

  scaphoid_pad_right_change(value: any) {
    this.test2(value.target.checked, 'scaphoid_pad_right');
  }

  scaphoid_pad_left_change(value: any) {
    this.test2(value.target.checked, 'scaphoid_pad_left');
  }
  reverse_morton_extension_right_change(value: any) {
    this.test2(value.target.checked, 'reverse_morton_extension_right');
  }

  reverse_morton_extension_left_change(value: any) {
    this.test2(value.target.checked, 'reverse_morton_extension_left');
  }

  morton_extension_right_change(value: any) {
    this.test2(value.target.checked, 'morton_extension_right');
  }

  morton_extension_left_change(value: any) {
    this.test2(value.target.checked, 'morton_extension_left');
  }
  u_cut_out_right_no_change(value: any) {
    this.test(value, 'u_cut_out_right_no');
  }

  u_cut_out_left_no_change(value: any) {
    this.test(value, 'u_cut_out_left_no');
  }
  extrensic_fore_foot_position_right_no_change(value: any) {
    this.test(value, 'extrensic_fore_foot_position_right_no');
  }

  extrensic_fore_foot_position_left_no_change(value: any) {
    this.test(value, 'extrensic_fore_foot_position_left_no');
  }

  extrensic_rare_foot_position_right_no_change(value: any) {
    this.test(value, 'extrensic_rare_foot_position_right_no');
  }

  extrensic_rare_foot_position_left_no_change(value: any) {
    this.test(value, 'extrensic_rare_foot_position_left_no');
  }

  // MIDDLE LAYER 
  onItemChangemicrocell(value: any) {
    this.mi_microcell = value;
    localStorage.setItem('tu_microsell', this.mi_microcell);
  }
  onItemChangesuede(value: any) {
    this.mi_suede = value;
    localStorage.setItem('tu_suede', this.mi_suede);
  }
  onItemChangevinyl(value: any) {
    this.mi_vinyl = value;
    localStorage.setItem('tu_vinyl', this.mi_vinyl);
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
  // middlelayer
  mi_microcell_options = [
    { id: 1, value: 'Black' },
    { id: 2, value: 'Green' },
    { id: 3, value: 'Red' },
    { id: 4, value: 'Navy' },
  ];
  mi_suede_options = [
    { id: 1, value: 'Black' },
    { id: 2, value: 'Tan' },
    { id: 3, value: 'Brown' },
  ];
  mi_vinyl_options = [
    { id: 1, value: 'Black' },
    { id: 2, value: 'Navy' },
  ];
}
