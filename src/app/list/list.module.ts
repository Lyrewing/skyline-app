import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ListPage } from './list.page';
import { OrderPage } from './orderservice/order.page';
    import {NgxEchartsModule} from 'ngx-echarts';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxEchartsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListPage
      },
      {
        path: 'order',
        component: OrderPage,
      }


    ])
  ],
  declarations: [ListPage, OrderPage]
})
export class ListPageModule { }
