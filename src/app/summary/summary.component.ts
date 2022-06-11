import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent implements OnInit {
  // topcovers_types: any;
  public topcovers_types: any = [];
  public tcsc_length : any = [];
  public tcsc_cusion : any = [];
  public tcsc_types_of_shell : any = [];
  deep_heel_cup:any;
  _: any = _;
  constructor() {}

  ngOnInit() {
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
      'Microcel': tc_microcell,
      'Leather Choices': tc_leather_choices,
      'Eva Perfeated': tc_eva_perfeated,
      'Sports': tc_sports,
      'suedo': tc_suedo,
      'vinyl': tc_vinyl,
    };
    this.topcovers_types = _.pickBy(topcovers, _.identity);

    // 
   let  {deep_heel_cup,tcsc_length,tcsc_cusion,tcsc_types_of_shell} = localStorage
   
   this.deep_heel_cup = deep_heel_cup;
   this.tcsc_length = JSON.parse(tcsc_length)
   this.tcsc_cusion = JSON.parse(tcsc_cusion)
   this.tcsc_types_of_shell = JSON.parse(tcsc_types_of_shell)

   console.log(this.tcsc_cusion);
   
   
   










































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
}
