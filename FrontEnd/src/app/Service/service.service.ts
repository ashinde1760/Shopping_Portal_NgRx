import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Login } from '../model/login';
import { SignUp } from '../model/signup';
import { SingleProduct } from '../model/SingleProduct';
import { GetProdData } from '../model/getProductData';
import { MyOrderData } from '../model/MyOrderData';
import { User } from '../model/user';
import { CartData } from '../model/carts';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  datas = {
    productName: '',
    description: '',
    price: 0,
    quantity: 1,
    uid: '',
    image: ''
  }

  constructor(private http: HttpClient, private cookie: CookieService) { }

  loginUser(data: Login) {
    //calling backed API
    return this.http.post<User>(`${environment.baseUrl}/user/login`, data);
  }

  getAllProducts() {
    //calling backed API
    return this.http.get<GetProdData>(`${environment.baseUrl}/product/allProducts`);
  }

  regUser(data: SignUp) {
    //calling backed API
    return this.http.post<User>(`${environment.baseUrl}/user/addUser`, data);
  }

  addProduct(data: SingleProduct) {
    //calling backed API
    return this.http.post<SingleProduct>(`${environment.baseUrl}/product/addProduct`, data);
  }

  getProductData(id: any) {
    //calling backed API
    return this.http.get(`${environment.baseUrl}/product/getProduct/${id}`);
  }

  addToCart(data: GetProdData) {
    //reformatting data
    this.datas.productName = data.productName;
    this.datas.description = data.description;
    this.datas.price = data.price;
    this.datas.quantity = data.quantity;
    this.datas.uid = localStorage.getItem('uid') as string;
    this.datas.image = data.image;

    //calling backed API
    return this.http.post<CartData>(`${environment.baseUrl}/product/addToCart`, this.datas);
  }


  PostOrderData(data: MyOrderData) {
    //calling backed API
    return this.http.post<MyOrderData>(`${environment.baseUrl}/product/myOrder`, data);
  }


  getCartDetails(uid: string) {
    //calling backed API
    return this.http.get<CartData>(`${environment.baseUrl}/product/getCartProduct/${uid}`);
  }

  loggedIn() {
    //checking whether token is available in cookies or not
    return !!this.cookie.get('token');
  }

  getToken() {
    //getting token from cookies
    return this.cookie.get('token');
  }

  delete(id: number) {
    //calling backed API
    return this.http.delete(`${environment.baseUrl}/product/deleteFromCart/${id}`);
  }


  deleteMyCart(uid: string) {
    //calling backed API
    return this.http.delete(`${environment.baseUrl}/product/clearCart/${uid}`);
  }

  getOrderDetails(uid: string) {
    //calling backed API
    return this.http.get<MyOrderData>(`${environment.baseUrl}/product/getOrderDetails/${uid}`);

  }

}
