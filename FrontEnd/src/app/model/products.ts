
export class Products{

    id?:number;
    productName:string;
    description:string;
    price:string;
    uid?:string;
    quantity:string;
    image:string

    constructor(id:number,productName:string,description:string,price:string,uid:string,quantity:string,image:string){
        this.id=id;
        this.productName=productName;
        this.description=description;
        this.price=price;
        this.uid=uid;
        this.quantity=quantity;
        this.image=image;
    }
}