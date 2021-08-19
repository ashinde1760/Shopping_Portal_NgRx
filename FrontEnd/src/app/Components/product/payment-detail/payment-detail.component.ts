import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { cloneDeep } from 'lodash';
import { CartData } from 'src/app/model/carts';
import { ServiceService } from 'src/app/Service/service.service';
import { getCartData } from '../store/product.selector';
import Swal from 'sweetalert2';
import { AppState } from 'src/app/store/app.state';


@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.css']
})
export class PaymentDetailComponent implements OnInit {

  newMyCartDetails: CartData[] = [];
  myCartDetails: CartData[] = [];
  paymentDetails!: FormGroup;
  selected = '';
  selected1 = '';
  mediaSub: any;
  deviceXs: any;
  userId: string;
  cardNo!:string;
  count!:number;
  datas = {
    productName: '',
    price: 0,
    uid: '',
    date: 1
  };
  form!: FormGroup;
  submitted: boolean = false;



  constructor(public router: Router, private formBuilder: FormBuilder,
    public mediaObserver: MediaObserver, private service: ServiceService,
    private store: Store<AppState>, private snack: MatSnackBar,
    private _fb: FormBuilder) {
    this.userId = JSON.parse(localStorage.getItem('uid') || '{}');
    this.cardPaymentDetails();
  }

  ngOnInit(): void {
    //this is for responsiveness
    this.mediaSub = this.mediaObserver.media$.subscribe((res: MediaChange) => {
      this.deviceXs = res.mqAlias === "xs" ? true : false;
      this.count=0;
    })
  }

  cardPaymentDetails() {
    this.paymentDetails = this.formBuilder.group(
      {
        cardHolderName: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z ]{2,30}")]),
        cardNumber: new FormControl('', [Validators.required]),
        CVV: new FormControl('', [Validators.required, Validators.pattern("[0-9]{3}$")]),
      }
    );
 }

  payment() {
    //getting data from "store cart" which user has ordered
    this.store.select(getCartData).subscribe((data: CartData[]) => {

      this.myCartDetails = data;
      this.newMyCartDetails = cloneDeep(this.myCartDetails);
    });

    this.postOrderData();

    Swal.fire('Done', 'Payment done successfully, You can view your Order by clicking on My Order', 'success');

    this.service.deleteMyCart(this.userId);

    this.router.navigate(['/product/home']);

  }

  postOrderData() {
    //it will store ordered data in myorder table at backend
    for (let i = 0; i < this.newMyCartDetails.length; i++) {
      this.datas.productName = this.newMyCartDetails[i].productName;
      this.datas.price = this.newMyCartDetails[i].price;
      this.datas.uid = this.newMyCartDetails[i].uid as string;
      this.datas.date = Date.now();

      //calling service to store data at backend
      this.service.PostOrderData(this.datas).subscribe(result => {
        },
        (error) => {
          alert("something went wrong...");
        })
    }

    //it will delete all cart data after placing order
    this.service.deleteMyCart(this.userId).subscribe(data => {
    });
  }

  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }
}