import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit {

  active: boolean = true;
  items: any = [
    {
      src: './assets/images/categoria/01.jpg',
      name: 'Mercado',
      url: '#'
    },
    {
      src: './assets/images/categoria/02.jpg',
      name: 'Restaurantes',
      url: '#'
    },
    {
      src: './assets/images/categoria/03.jpg',
      name: 'Pizzaria',
      url: '#'
    },
    {
      src: './assets/images/categoria/04.jpg',
      name: 'Ropa',
      url: '#'
    },
    {
      src: './assets/images/categoria/05.jpg',
      name: 'Varios',
      url: '#'
    },
    {
      src: './assets/images/categoria/06.jpg',
      name: 'Hamburgueseria',
      url: '#'
    }
  ];

  shops: any = [
    {
      src: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
      name: 'Cafeteria Isa bella',
      rating: 4.1,
      category: 'Pizzeria',
      distance: 4.7,
      redirectTo: '/'
    },
    {
      src: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
      name: 'Cafeteria Isa bella',
      rating: 4.1,
      category: 'Pizzeria',
      distance: 4.7,
      redirectTo: '/'
    },
    {
      src: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
      name: 'Cafeteria Isa bella',
      rating: 4.1,
      category: 'Pizzeria',
      distance: 4.7,
      redirectTo: '/'
    },
    {
      src: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
      name: 'Cafeteria Isa bella',
      rating: 4.6,
      category: 'Pizzeria',
      distance: 10.2,
      redirectTo: '/'
    }
  ]
  constructor() {}

  ngOnInit() {
    this.active = true;
  }

  segmentChanged(ev: any) {
    if (ev.detail.value === 'delivery') {
      this.active = true;
    }
    if (ev.detail.value === 'shop') {
      this.active = false;
    }
  }

  onClick() {
    console.log('Go to Direccion');
  }
}
