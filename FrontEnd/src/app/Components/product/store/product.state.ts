import { CartData } from 'src/app/model/carts';
import { GetProdData } from 'src/app/model/getProductData';
import { MyOrderData } from 'src/app/model/MyOrderData';


export interface ProductState{
    products:GetProdData | null;
    carts:CartData[] ;
    order:MyOrderData[];
}

export const productState:ProductState={
    products:null,
    carts:[],
    order:[],
}
