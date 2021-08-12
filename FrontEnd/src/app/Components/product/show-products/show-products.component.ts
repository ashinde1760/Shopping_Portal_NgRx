import { Router } from '@angular/router';
import { getProductData, addCart } from '../store/product.actions';
import { AppState } from '../../../store/app.state';
import { Store } from '@ngrx/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { loadAllProducts } from '../store/product.actions';
import { Observable } from 'rxjs';
import { getCartData, getProducts } from '../store/product.selector';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { GetProdData } from 'src/app/model/getProductData';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit, OnDestroy {

  mediaSub: any;
  deviceXs: any;
  userId: string;
  products: Observable<GetProdData[]> | any;


  constructor(private store: Store<AppState>,
              public mediaObserver: MediaObserver,
              private router: Router) {
    this.userId = JSON.parse(localStorage.getItem('uid') || '{}');
  }

  ngOnInit(): void {

    //this is for responsiveness
    this.mediaSub = this.mediaObserver.media$.subscribe((res: MediaChange) => {
      this.deviceXs = res.mqAlias === "xs" ? true : false;
    })

    //calling an action to get all products
    this.store.dispatch(loadAllProducts());

    //it will get a data which is storeed in "store"
    this.products = this.store.select(getProducts);
  }

  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }

  addToCart(id: number) {
   //it will call an action to add a product in a cart
    this.store.dispatch(getProductData({ id: id }));
  }
}
