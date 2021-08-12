import { Component, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Address } from 'src/app/model/Address';
import { ServiceService } from 'src/app/Service/service.service';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  mediaSub: any;
  deviceXs: any;
  selected = '';
  address!:Address;
  addAddressFormGroup!: FormGroup;

  constructor(public router: Router, private formBuilder: FormBuilder,
    public mediaObserver: MediaObserver, private service: ServiceService,
    private store: Store<AppState>) {
    this.addAddressForm();
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

  addAddressForm() {
    this.addAddressFormGroup = this.formBuilder.group(
      {
        Area: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z ,]{2,30}")]),
        Landmark: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z ,]{2,30}")]),
        Pincode: new FormControl('', [Validators.required, Validators.pattern("[0-9]{6}$")]),
        Town: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z ,]{2,30}")]),
      }
    );
  }

  addAddress() {

    this.address=this.addAddressFormGroup.value;
    //string address on local storage
    localStorage.setItem('address',JSON.stringify(this.address));

    this.router.navigate(["/product/payment"])
  }
}
