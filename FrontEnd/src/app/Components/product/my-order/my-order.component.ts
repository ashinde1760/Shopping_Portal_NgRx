import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Router } from '@angular/router';
import { Component, OnInit,AfterViewInit, ViewChild } from '@angular/core';
import { myCartData } from 'src/app/model/mycart';
import { Store } from '@ngrx/store';
import { CartData } from 'src/app/model/carts';
import { fetchOrderData, getCartData } from '../store/product.selector';
import { ServiceService } from 'src/app/Service/service.service';
import { getOrderData } from '../store/product.actions';
import {MatTableDataSource} from '@angular/material/table'
import { MyOrderData } from 'src/app/model/MyOrderData';
import { AppState } from 'src/app/store/app.state';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent implements OnInit,AfterViewInit {

  mediaSub: any;
  deviceXs: any;
  userId: string;
  newOrder: MyOrderData[] = [];

  orderdata = JSON.parse(localStorage.getItem("my_cart_data") || '{}');
  gt = JSON.parse(localStorage.getItem("Grandtotal") || '{}');

  id!: number;

  //code done for table creation

  ELEMENT_DATA: MyOrderData[] = [];

  //table columns
  displayedColumns: string[] = ['id','date','productName','price','status'];

  //this datasourse will be send to the table as a source of data
  dataSource = new MatTableDataSource<MyOrderData>(this.ELEMENT_DATA);

  constructor(public mediaObserver: MediaObserver,
    public router: Router, public store: Store<AppState>, private service: ServiceService) {
    this.userId = JSON.parse(localStorage.getItem('uid') || '{}');
  }

  ngOnInit(): void {
    //this is for responsiveness
    this.mediaSub = this.mediaObserver.media$.subscribe((res: MediaChange) => {
      this.deviceXs = res.mqAlias === "xs" ? true : false;
    })

    //calling an action for getting a ordered data from backend
    this.store.dispatch(getOrderData({ uid: this.userId }));

    //it will get all Oredered data that has stored in "Store"
    this.store.select(fetchOrderData).subscribe((data: MyOrderData[]) => {
      console.log(data);
      
      this.newOrder = data;

      //this add new order array to datasource
      this.dataSource.data = this.newOrder;
    })

    this.service.deleteMyCart(this.userId);
  }


//for sorting the table columns

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit(){

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  //for filtering table content

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



}