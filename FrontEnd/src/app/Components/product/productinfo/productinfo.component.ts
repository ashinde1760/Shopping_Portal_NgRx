import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MediaObserver, MediaChange } from '@angular/flex-layout';

import { Products } from 'src/app/model/products';
import { ServiceService } from 'src/app/Service/service.service';
import { AppState } from 'src/app/store/app.state';


@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.css']
})
export class ProductinfoComponent implements OnInit, OnDestroy {


  product!: Products;
  postForm!: FormGroup;
  id: any;
  mediaSub: any;
  deviceXs: any;

  collection: any = {
    id: '',
    productName: '',
    description: '',
    price: '',
    quantity: '',
  };

  constructor(public mediaObserver: MediaObserver, private route: ActivatedRoute, private store: Store<AppState>, private router: Router, private service: ServiceService) { }


  ngOnInit() {
    this.mediaSub = this.mediaObserver.media$.subscribe((res: MediaChange) => {
      this.deviceXs = res.mqAlias === "xs" ? true : false;
    })


    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });

    this.get();
  }

  get() {

    this.service.getProductData(this.id).subscribe((data: any) => {

      this.collection = data;
    })

  }

  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }
}
