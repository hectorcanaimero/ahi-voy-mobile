import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {

  @Input() data: any = [];

  constructor() { }

  ngOnInit() {}

}
