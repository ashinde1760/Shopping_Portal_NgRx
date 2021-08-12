import { MyOrderComponent } from './my-order/my-order.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { AddProductComponent } from './add-product/add-product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowProductsComponent } from './show-products/show-products.component';
import { ProductinfoComponent } from './productinfo/productinfo.component';
import { PaymentDetailComponent } from './payment-detail/payment-detail.component';
import { AddressComponent } from './address/address.component';

const routes: Routes = [
  {
    path:'home',
    component:ShowProductsComponent
  },
  {
    path:'add',
    component:AddProductComponent
  },
  {
    path:'myCart',
    component:MyCartComponent
  },
  {
    path:'payment',
    component:PaymentDetailComponent
  },
  {
    path:'address',
    component:AddressComponent
  },
  {
    path:'moreinfo/:id',
    component:ProductinfoComponent
  },
  {
    path:'myOrder',
    component:MyOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
