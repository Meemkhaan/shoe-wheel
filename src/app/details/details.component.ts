import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  options: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.options = this.route.snapshot.paramMap.get('options');
  }

  topcovers = [
    {
      id: '1',
      imageUrl: '../../assets/vinyl-black.png',
      title: 'Vinyl',
    },
    {
      id: '2',
      imageUrl: '../../assets/modifications-img-1.png',
      title: 'Sports',
    },
    {
      id: '3',
      imageUrl: '../../assets/vinyl-black.png',
      title: 'Microcell',
    },
    {
      id: '4',
      imageUrl: '../../assets/modifications-img-1.png',
      title: 'Leather',
    },
    {
      id: '5',
      imageUrl: '../../assets/vinyl-black.png',
      title: 'X-Static',
    },
    {
      id: '6',
      imageUrl: '../../assets/modifications-img-1.png',
      title: 'EVA-Perforated',
    },
    {
      id: '7',
      imageUrl: '../../assets/vinyl-black.png',
      title: 'Suede',
    },
    {
      id: '8',
      imageUrl: '../../assets/modifications-img-1.png',
      title: 'Length',
    },
  ]
  middleLayer = [
    {
      id: '1',
      imageUrl: '../../assets/vinyl-black.png',
      title: 'Vinyl Black',
    },
    {
      id: '2',
      imageUrl: '../../assets/modifications-img-1.png',
      title: 'Vinyl Navy',
    },
    {
      id: '3',
      imageUrl: '../../assets/vinyl-black.png',
      title: 'Microcell Black',
    },
    {
      id: '4',
      imageUrl: '../../assets/modifications-img-1.png',
      title: 'Microcell Green',
    },
    {
      id: '5',
      imageUrl: '../../assets/vinyl-black.png',
      title: 'Microcell Red',
    },
    {
      id: '6',
      imageUrl: '../../assets/modifications-img-1.png',
      title: 'Microcell Navy',
    },
    {
      id: '7',
      imageUrl: '../../assets/vinyl-black.png',
      title: 'Suede Black',
    },
    {
      id: '8',
      imageUrl: '../../assets/modifications-img-1.png',
      title: 'Suede Tan',
    },
    {
      id: '9',
      imageUrl: '../../assets/modifications-img-1.png',
      title: 'Suede Brown ',
    },
  ]

}
