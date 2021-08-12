import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { deleteFromCart, getCartDetails } from '../store/product.actions';
import { getCartData } from '../store/product.selector';
import { AppState } from '../../../store/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ServiceService } from '../../../Service/service.service';
import { Router } from '@angular/router';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Component, OnInit } from '@angular/core';
import { CartData } from 'src/app/model/carts';
import { myCartData } from 'src/app/model/mycart';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {

  mediaSub: any;
  deviceXs: any;
  userId: string;
  count!: Observable<number>;
  total: number = 0;
  grandTotal: number = 0;
  button: boolean = false;

  cartDetails: CartData[] = [];
  cartDetails1: CartData[] = [];

  constructor(public mediaObserver: MediaObserver,
    public router: Router,
    private service: ServiceService,
    private store: Store<AppState>,
    private snack: MatSnackBar
  ) {
    this.userId = JSON.parse(localStorage.getItem('uid') || '{}');
  }


  ngOnInit(): void {
    //this is for responsiveness
    this.mediaSub = this.mediaObserver.media$.subscribe((res: MediaChange) => {
     this.deviceXs = res.mqAlias === "xs" ? true : false;

      //calling an action for getting cart data from table
      this.store.dispatch(getCartDetails({ uid: this.userId }));

      //getting cart data data from "Store"
      this.store.select(getCartData).subscribe((data: CartData[]) => {

        this.cartDetails1 = data;
        this.cartDetails = cloneDeep(this.cartDetails1);

        this.grandTotal = 0;

        //calculating Grand total 
        for (let i = 0; i < this.cartDetails.length; i++) {
          this.grandTotal = this.grandTotal + this.cartDetails[i].price;
        }
      })
    })
  }


  onIncrement(id: number, quantity: number, price: number, total: number) {
    console.log("hii");
    
    if (quantity >= 1) {
      for (let i = 0; i < this.cartDetails.length; i++) {
        if (this.cartDetails[i].id === id) {
          this.cartDetails[i].quantity = quantity + 1;
          this.cartDetails[i].total = this.cartDetails[i].price * this.cartDetails[i].quantity;
          if (this.cartDetails[i].quantity > 1) {
            this.total1(this.cartDetails[i].price);
          }
        }
      }
    }
  }


  onDecrement(id: number, quantity: number, price: number, total: number) {
    if (quantity != 1) {
      for (let i = 0; i < this.cartDetails.length; i++) {
        if (this.cartDetails[i].id === id) {
          this.cartDetails[i].quantity = quantity - 1;
          if (this.cartDetails[i].total >= 0) {
            this.cartDetails[i].total = this.cartDetails[i].quantity * this.cartDetails[i].price;
            this.total2(this.cartDetails[i].price);
          }
        }
      }
    }
  }



  total1(x: number) {
    this.grandTotal = this.grandTotal + x;
  }

  total2(x: number) {
    this.grandTotal = this.grandTotal - x;
  }



  delete(id: number) {
    Swal.fire({
      title: 'Do you want to Remove?',
      showDenyButton: true,
      confirmButtonText: 'YES',
      denyButtonText: 'NO'
    }).then((res: any) => {
      if (res.isConfirmed) {
        this.store.dispatch(deleteFromCart({ id: id }));
        this.ngOnInit();
        this.router.navigate(['/product/home']);
        this.snack.open("Product Remove from Cart Successfully", 'OK', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'center'
        })
      }
    })
  }


  getdeleted() {
    window.location.reload();
  }


  Buy(gt: number) {
    if (gt > 0) {
      this.router.navigate(["/product/address"])
    }
    else {
      alert("quantity will not be less than or equal to zero")
    }
  }

}
