import { HeaderFooterModule } from '../header-footer/header-footer.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { ShowProductsComponent } from './show-products/show-products.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { SharedModule } from 'src/app/Shared-Module/shared.module';
import { ProductinfoComponent } from './productinfo/productinfo.component';



import {MatGridListModule} from '@angular/material/grid-list';
import { PaymentDetailComponent } from './payment-detail/payment-detail.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { AddressComponent } from './address/address.component';




@NgModule({
  declarations: [
    AddProductComponent,
    ShowProductsComponent,
    MyCartComponent,
    ProductinfoComponent,
    PaymentDetailComponent,
    MyOrderComponent,
    AddressComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    HeaderFooterModule,
    SharedModule,
    MatGridListModule,

  ]
})
export class ProductModule { }
