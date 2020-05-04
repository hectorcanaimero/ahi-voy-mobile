import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
})
export class SlidesComponent implements OnInit {

  @Input() data: any = [];
  slideOpts = {
    initialSlide: 0,
    direction: 'horizontal',
    speed: 300,
    effect: 'slide',
    spaceBetween: 8,
    slidesPerView: 2.5,
    freeMode: true,
    loop: true,
    pagination: false
  };
  constructor() { }

  ngOnInit() {}

}
