import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppState } from '../../../store/app.state';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { ServiceService } from 'src/app/Service/service.service';
import { Store } from '@ngrx/store';
import { addProduct } from '../store/product.actions';
import { SingleProduct } from 'src/app/model/SingleProduct';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  mediaSub: any;
  deviceXs: any;
  productData!:SingleProduct;
  addProductFormGroup!: FormGroup;

  constructor(public router:Router,private formBuilder: FormBuilder,
              public mediaObserver: MediaObserver,private service:ServiceService,
              private store:Store<AppState>,private snack:MatSnackBar)
              {
                  this.addProductForm();
              }

  ngOnInit(): void {
    //this is for responsiveness
    this.mediaSub = this.mediaObserver.media$.subscribe((res: MediaChange) => {
      this.deviceXs = res.mqAlias === "xs" ? true : false;
    })
  }

  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }

  addProductForm() {
    this.addProductFormGroup = this.formBuilder.group(
      {
        productName: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required]),
        price: new FormControl('', [Validators.required, Validators.pattern("[0-9]{1,9}")]),
        quantity: new FormControl('1', [Validators.required, Validators.pattern("[0-9]{1,9}")]),
        image:new FormControl('', [Validators.required]),
      }
    );
  }

  addProduct() {

    this.productData=this.addProductFormGroup.value;
    
    //calling action
    this.store.dispatch(addProduct(this.productData))

    this.snack.open("Product Added Successfully",'OK',{
      duration:3000,
      verticalPosition:'top',
      horizontalPosition:'center'
  })
  }
}
