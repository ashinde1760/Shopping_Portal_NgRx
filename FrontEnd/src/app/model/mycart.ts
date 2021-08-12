export class myCartData{

  id:number;
  productName:string;
  description:string;
  price:number;
  uid:string;
  quantity:number;
  total:number
  image:string

  constructor(id:number,productName:string,description:string,price:number,uid:string,quantity:number,total:number, image:string){
      this.id=id;
      this.productName=productName;
      this.description=description;
      this.price=price;
      this.uid=uid;
      this.quantity=quantity;
      this.total = total;
      this.image =  image;

  }
}
