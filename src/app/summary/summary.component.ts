import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as _ from 'lodash';
import jsPDF from 'jspdf';
import * as jsPDF from 'jspdf'
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent implements OnInit {
  @ViewChild('htmlDatas', { static: false }) pdfTable!: ElementRef;

  _: any = _;
  public topcovers_types: any = [];
  public modification_types: any = [];
  public tcsc_length_types: any = [];
  public tcsc_cusion_types: any = [];
  public tcsc_types_of_shell: any = [];
  public sheel_modifications: any = [];
  deep_heel_cup: any;
  //
  tu_suede: any;
  tu_microcell: any;
  tu_vinyl: any;

  constructor() {}

  ngOnInit() {
    //! Topcovers
    let {
      tc_x_static,
      tc_microcell,
      tc_leather_choices,
      tc_eva_perfeated,
      tc_sports,
      tc_suedo,
      tc_vinyl,
    } = localStorage;

    let topcovers: any = {
      'X Static': tc_x_static,
      Microcel: tc_microcell,
      'Leather Choices': tc_leather_choices,
      'Eva Perfeated': tc_eva_perfeated,
      Sports: tc_sports,
      suedo: tc_suedo,
      vinyl: tc_vinyl,
    };
    this.topcovers_types = _.pickBy(topcovers, _.identity);
    //! Types of Shell and Cushion
    let { deep_heel_cup, tcsc_length, tcsc_cusion, tcsc_types_of_shell } =
      localStorage;

    if (deep_heel_cup !== undefined) this.deep_heel_cup = deep_heel_cup;
    if (tcsc_length !== undefined)
      this.tcsc_length_types = JSON.parse(tcsc_length);
    if (tcsc_cusion !== undefined)
      this.tcsc_cusion_types = JSON.parse(tcsc_cusion);

    if (tcsc_types_of_shell !== undefined)
      this.tcsc_types_of_shell = JSON.parse(tcsc_types_of_shell);

    //! Modifications
    let {
      heel_spur_pad_right,
      heel_spur_pad_left,
      heel_cusion_right,
      heel_cusion_left,
      met_pad_right_no,
      met_pad_left_no,
      met_bar_pad_right_no,
      met_bar_pad_left_no,
      toe_crest_right,
      toe_crest_left,
      letral_clip_right,
      letral_clip_left,
      cuboid_pad_right,
      cuboid_pad_left,
      high_medial_flang_right,
      high_medial_flang_left,
      heel_lift_right_no,
      heel_lift_left_no,
      reinforced_arch_right,
      reinforced_arch_left,
      rear_foot_posting_right,
      rear_foot_posting_left,
      navicular_pad_right,
      navicular_pad_left,
      scaphoid_pad_right,
      scaphoid_pad_left,
      reverse_morton_extension_right,
      reverse_morton_extension_left,
      morton_extension_right,
      morton_extension_left,
      u_cut_out_right_no,
      u_cut_out_left_no,
      extrensic_fore_foot_position_right_no,
      extrensic_fore_foot_position_left_no,
      extrensic_rare_foot_position_right_no,
      extrensic_rare_foot_position_left_no,
    } = localStorage;

    let modifications: any = {
      'Heel Cusion Right': heel_cusion_right,
      'Heel Cusion Left': heel_cusion_left,
      'Met Pad Right No': met_pad_right_no,
      'Met Pad Left No': met_pad_left_no,
      'Met Bar Pad Right No': met_bar_pad_right_no,
      'Met Bar Pad Left No': met_bar_pad_left_no,
      'Toe Crest Right': toe_crest_right,
      'Toe Crest Left': toe_crest_left,
      'Letral Clip Right': letral_clip_right,
      'Letral Clip Left': letral_clip_left,
      'Heel Spur Pad Right': heel_spur_pad_right,
      'Heel Spur Pad Left': heel_spur_pad_left,
      'Cubiod Pad Right': cuboid_pad_right,
      'Cuboid Pad Left': cuboid_pad_left,
      'High Medial Flang Right': high_medial_flang_right,
      'High Medial Flang Left': high_medial_flang_left,
      'Heel Lift Right No': heel_lift_right_no,
      'Heel Lift Left No': heel_lift_left_no,
      'Reinforced Arch Right': reinforced_arch_right,
      'Reinforced Arch Left': reinforced_arch_left,
      'Rear Foot Posting Right': rear_foot_posting_right,
      'Rear Foot Posting Left': rear_foot_posting_left,
      'Navicular Pac Right': navicular_pad_right,
      'Navicular Pac Left': navicular_pad_left,
      'Scaphoid Pad Right': scaphoid_pad_right,
      'Scaphoid Pad Left': scaphoid_pad_left,
      'Reverse Morton Extension Right': reverse_morton_extension_right,
      'Reverse Morton Extension Left': reverse_morton_extension_left,
      'Mortons Extension Right': morton_extension_right,
      'Mortons Extension Left': morton_extension_left,
      'U Cut Out Right No': u_cut_out_right_no,
      'U Cut Out Left No': u_cut_out_left_no,
      'Extrensic Fore Foot Position Right No':
        extrensic_fore_foot_position_right_no,
      'Extrensic Fore Foot Position Left No':
        extrensic_fore_foot_position_left_no,
      'Extrensic Rare Foot Position Right No':
        extrensic_rare_foot_position_right_no,
      'Extrensic Rare Foot Position Left No':
        extrensic_rare_foot_position_left_no,
    };

    this.modification_types = _.pickBy(modifications, _.identity);

    //! Underlayer
    let { tu_suede, tu_microcell, tu_vinyl } = localStorage;

    if (tu_suede !== undefined) this.tu_suede = tu_suede;
    if (tu_microcell !== undefined) this.tu_microcell = tu_microcell;
    if (tu_vinyl !== undefined) this.tu_vinyl = tu_vinyl;

    //! Sheel-Modifications

    let {
      heel_center_pocket_left,
      heel_center_pocket_right,
      first_meet_cut_out_left,
      first_meet_cut_out_right,
      first_ray_cut_out_left,
      first_ray_cut_out_right,
      fascia_grove_left,
      fascia_grove_right,
      induced_in_toening,
      induced_out_toening,

      kirbey_skive_medial_position_left,
      kirbey_skive_medial_position_left_no,
      kirbey_skive_medial_position_right,
      kirbey_skive_medial_position_right_no,
      kirbey_skive_lateral_position_left,
      kirbey_skive_lateral_position_left_no,
      kirbey_skive_lateral_position_right,
      kirbey_skive_lateral_position_right_no,
    } = localStorage;

    let sheelTypes: any = {
      'heel center pocket left': heel_center_pocket_left,
      'heel center pocket right': heel_center_pocket_right,
      'first meet cut out left': first_meet_cut_out_left,
      'first meet cut out right': first_meet_cut_out_right,
      'first ray cut out left': first_ray_cut_out_left,
      'first ray cut out right': first_ray_cut_out_right,
      'fascia grove left': fascia_grove_left,
      'fascia grove right': fascia_grove_right,
      'induced in toening': induced_in_toening,
      'induced out toening': induced_out_toening,
      'kirbey skivemedial position left': kirbey_skive_medial_position_left,
      'kirbey skive medial position left no':
        kirbey_skive_medial_position_left_no,
      'kirbey skive medial position right': kirbey_skive_medial_position_right,
      'kirbey skive medial position right no':
        kirbey_skive_medial_position_right_no,
      'kirbey skive lateral position left': kirbey_skive_lateral_position_left,
      'kirbey skive lateral position left_no':
        kirbey_skive_lateral_position_left_no,
      'kirbey skive lateral position right':
        kirbey_skive_lateral_position_right,
      'kirbey skive lateral position right no':
        kirbey_skive_lateral_position_right_no,
    };
    this.sheel_modifications = _.pickBy(sheelTypes, _.identity);

    // FOr posting data in database
    let top_covers_post: any = {
      tc_x_static,
      tc_microcell,
      tc_leather_choices,
      tc_eva_perfeated,
      tc_sports,
      tc_suedo,
      tc_vinyl,
    };
  }
  openPDF() {
    const doc = new jsPDF();
    const pdfTable = this.pdfTable.nativeElement;

  }
}
