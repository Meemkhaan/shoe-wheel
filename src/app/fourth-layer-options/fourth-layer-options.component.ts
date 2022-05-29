import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth-layer-options',
  templateUrl: './fourth-layer-options.component.html',
  styleUrls: ['./fourth-layer-options.component.css'],
})
export class FourthLayerOptionsComponent implements OnInit {
  tcsc_length? = {} as any;
  tcsc_cusion? = {} as any;
  tcsc_types_of_shell? = {} as any;

  // 
  tcsc_Sclus:any;
  tcsc_ful_length:any;
  lo_meters_length:any;

  // 
  deep_heel_cup:any;

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

  
   let dataaa =  JSON.parse(localStorage.getItem('tcsc_length') as string);
   this.tcsc_Sclus = dataaa.sulcus;
   this.tcsc_ful_length = dataaa.full_length; 
   this.lo_meters_length = dataaa.lo_meters; 

   this.deep_heel_cup = localStorage.getItem('deep_heel_cup')

  }


  // 
  tcsc_full_length(value: any, values: any) {
    if (values == 'Full Length' && value.target.checked == true) {
      this.tcsc_length.full_length = 'Full Length';
      
    } else if (values == 'Full Length' && value.target.checked == false) {
      // this.tcsc_length.full_length = '';
      delete this.tcsc_length['full_length'];
    }
    if (values == 'Sulcus' && value.target.checked == true) {
      this.tcsc_length.sulcus = 'Sulcus';
    } else if (values == 'Sulcus' && value.target.checked == false) {
      delete this.tcsc_length['sulcus'];
    }

    if (values == '3/4 lo meters' && value.target.checked == true) {
      this.tcsc_length.lo_meters = '3/4 lo meters';
    } else if (values == '3/4 lo meters' && value.target.checked == false) {
      delete this.tcsc_length['lo_meters'];
    }

    localStorage.setItem('tcsc_length', JSON.stringify(this.tcsc_length));
  }


  
  deep_heel_cup_change(value:any){
    localStorage.setItem('deep_heel_cup', value);
    
  }




  // 
  deep_heel_cup_options = [
    { id: 1, value: '10 mm' },
    { id: 2, value: '12 mm' },
    { id: 3, value: '15 mm' },
    { id: 4, value: 'Other' },
  ];



}
