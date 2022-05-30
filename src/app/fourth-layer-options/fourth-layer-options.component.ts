import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth-layer-options',
  templateUrl: './fourth-layer-options.component.html',
  styleUrls: ['./fourth-layer-options.component.css'],
})
export class FourthLayerOptionsComponent implements OnInit {
  tcsc_length = {} as any;
  tcsc_Sclus: any;
  tcsc_ful_length: any;
  lo_meters_length: any;
  //
  tcsc_cusion? = {} as any;
  tscs_none: any;
  tscs_2mm: any;
  tscs_3mm: any;
  tscs_other: any;
  //
  tcsc_types_of_shell? = {} as any;
  sheel_type_rigid: any;
  sheel_type_semi_rigid: any;
  sheel_type_3_mm: any;
  //
  deep_heel_cup: any;
  //
  first_meet_cut_out_left:any; 
  first_meet_cut_out_right:any; 
  //
  first_ray_cut_out_left:any; 
  first_ray_cut_out_right:any; 

  constructor() {}
  ngOnInit() {
    $(function () {
      $('.item').hide();
      let activatedRoute = window.location.pathname;
      if (activatedRoute.match('deep-heel-cup')) {
        $('#deep-heel > .item').show();
      } else if (activatedRoute.match('length')) {
        $('#length > .item').show();
      } else if (activatedRoute.match('cusion')) {
        $('#cusion > .item').show();
      } else if (activatedRoute.match('types-of-sheel')) {
        $('#sheel-types > .item').show();
      } else if(activatedRoute.match('first-meet-cut-out')){
        $('#first-meet-cut-out > .item').show();
        
      }

      let radius = 270;
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

    // Todo Need to check this properly

    if (localStorage.getItem('tcsc_length') !== null) {
      this.tcsc_length = JSON.parse(localStorage.getItem('tcsc_length') as any);
      this.tcsc_Sclus = this.tcsc_length['sulcus'];
      this.tcsc_ful_length = this.tcsc_length['full_length'];
      this.lo_meters_length = this.tcsc_length['3/4 lo meters'];
    }

    if (localStorage.getItem('tcsc_types_of_shell') !== null) {
      this.tcsc_types_of_shell = JSON.parse(
        localStorage.getItem('tcsc_types_of_shell') as any
      );
      this.sheel_type_rigid = this.tcsc_types_of_shell['Rigid (XT / CF)'];
      this.sheel_type_semi_rigid = this.tcsc_types_of_shell['Semi_Rigid'];
      this.sheel_type_3_mm = this.tcsc_types_of_shell['3_mm'];
    }

    if (localStorage.getItem('tcsc_cusion') !== null) {
      this.tcsc_cusion = JSON.parse(localStorage.getItem('tcsc_cusion') as any);
      this.tscs_none = this.tcsc_cusion['none'];
      this.tscs_2mm = this.tcsc_cusion['2mm'];
      this.tscs_3mm = this.tcsc_cusion['3mm'];
      this.tscs_other = this.tcsc_cusion['other'];
    }

    //
    this.deep_heel_cup = localStorage.getItem('deep_heel_cup');
    this.first_meet_cut_out_left = localStorage.getItem('first_meet_cut_out_left');
    this.first_meet_cut_out_right = localStorage.getItem('first_meet_cut_out_right');
  }

  //
  tcsc_full_length(value: any, values: any) {
    console.log(value.target.checked, values);

    if (values == 'Full Length' && value.target.checked == true) {
      this.tcsc_length['full_length'] = 'Full Length';
    } else if (values == 'Full Length' && value.target.checked == false) {
      delete this.tcsc_length['full_length'];
    }
    if (values == 'Sulcus' && value.target.checked == true) {
      this.tcsc_length['sulcus'] = 'Full sulcus';
    } else if (values == 'Sulcus' && value.target.checked == false) {
      delete this.tcsc_length['sulcus'];
    }

    if (values == '3/4 lo meters' && value.target.checked == true) {
      this.tcsc_length['3/4 lo meters'] = '3/4 lo meters';
    } else if (values == '3/4 lo meters' && value.target.checked == false) {
      delete this.tcsc_length['3/4 lo meters'];
    }

    localStorage.setItem('tcsc_length', JSON.stringify(this.tcsc_length));
  }

  tcsc_types_of_sheel_change(value: any, values: any) {
    if (values == 'Rigid (XT / CF)' && value.target.checked == true) {
      this.tcsc_types_of_shell['Rigid (XT / CF)'] = 'Rigid (XT / CF)';
    } else if (values == 'Rigid (XT / CF)' && value.target.checked == false) {
      delete this.tcsc_types_of_shell['Rigid (XT / CF)'];
    }
    if (values == 'Semi Rigid' && value.target.checked == true) {
      this.tcsc_types_of_shell['Semi_Rigid'] = 'Semi Rigid';
    } else if (values == 'Semi Rigid' && value.target.checked == false) {
      delete this.tcsc_types_of_shell['Semi_Rigid'];
    }

    if (values == '3 mm' && value.target.checked == true) {
      this.tcsc_types_of_shell['3_mm'] = '3 mm';
    } else if (values == '3 mm' && value.target.checked == false) {
      delete this.tcsc_types_of_shell['3_mm'];
    }
    localStorage.setItem(
      'tcsc_types_of_shell',
      JSON.stringify(this.tcsc_types_of_shell)
    );
  }

  tcsc_cusion_change(value: any, values: any) {
    if (values == 'none' && value.target.checked == true) {
      console.log(values);
      this.tcsc_cusion['none'] = 'none)';
    } 
    else if (values == 'none' && value.target.checked == false) {
      delete this.tcsc_cusion['none'];
    }

    if (values == '2mm' && value.target.checked == true) {
      console.log(values);
      this.tcsc_cusion['2mm'] = '2mm';
    } else if (values == '2mm' && value.target.checked == false) {
      delete this.tcsc_cusion['2mm'];
    }

    if (values == '3mm' && value.target.checked == true) {
      this.tcsc_cusion['3mm'] = '3mm';
    } else if (values == '3mm' && value.target.checked == false) {
      delete this.tcsc_cusion['3mm'];
    }

    if (values == 'other' && value.target.checked == true) {
      this.tcsc_cusion['other'] = 'other';
    } else if (values == 'other' && value.target.checked == false) {
      delete this.tcsc_cusion['other'];
    }
    localStorage.setItem('tcsc_cusion', JSON.stringify(this.tcsc_cusion));
  }


  test2(value: any, options: any) {
    value == true
      ? localStorage.setItem(`${options}`, value)
      : localStorage.removeItem(`${options}`);
  }

  deep_heel_cup_change(value: any) {
    localStorage.setItem('deep_heel_cup', value);
  }
// 
  first_meet_cut_out_left_change(value: any){
    this.test2(value.target.checked, 'first_meet_cut_out_left');
  }
  
  first_meet_cut_out_right_change(value: any){
    this.test2(value.target.checked, 'first_meet_cut_out_right');
  }
  // 
  first_ray_cut_out_left_change(value: any){
    this.test2(value.target.checked, 'first_ray_cut_out_left');
  }
  
  first_ray_cut_out_right_change(value: any){
    this.test2(value.target.checked, 'first_ray_cut_out_right');
  }


  //
  deep_heel_cup_options = [
    { id: 1, value: '10 mm' },
    { id: 2, value: '12 mm' },
    { id: 3, value: '15 mm' },
    { id: 4, value: 'Other' },
  ];
}
