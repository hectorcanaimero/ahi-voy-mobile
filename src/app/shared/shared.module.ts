import { ShopComponent } from './components/shop/shop.component';
import { SlidesComponent } from './components/slides/slides.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { OrderItemComponent } from './components/order-item/order-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    OrderItemComponent,
    SlidesComponent,
    ShopComponent
  ],
  exports: [
    OrderItemComponent,
    SlidesComponent,
    ShopComponent
  ],
  entryComponents: [
    OrderItemComponent,
    SlidesComponent,
    ShopComponent
  ],
  imports: [
    IonicModule,
    RouterModule,
    CommonModule
  ]
})
export class SharedModule { }
