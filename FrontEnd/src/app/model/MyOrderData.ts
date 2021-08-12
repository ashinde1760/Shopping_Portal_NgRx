export class MyOrderData {
  productName: string;
  price: number;
  uid: string;
  date: number;

  constructor(productName: string, price: number, uid: string, date: number) {
    this.productName = productName;
    this.price = price;
    this.uid = uid;
    this.date = date;
  }
}
