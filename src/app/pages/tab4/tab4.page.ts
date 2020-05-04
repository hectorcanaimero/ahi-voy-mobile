import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll: IonInfiniteScroll;
  active: boolean = true;

  constructor() { }

  ngOnInit() {
    this.active = true;
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  segmentChanged(ev: any) {
    if (ev.detail.value === 'active') {
      this.active = true;
    }
    if (ev.detail.value === 'history') {
      this.active = false;
    }
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();
      event.target.disabled = true;
      // if (data.length == 1000) {
      //   event.target.disabled = true;
      // }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
}
