
import { Actions } from '@ngrx/effects';
import { createEffect, ofType } from '@ngrx/effects';
import {
    addProduct, loadAllProducts, loadProductSuccess, getProductData,
    addCart, getCartDetails, getCartDetailsSuccess, deleteFromCart, getOrderData, getOrderDetailsSuccess, doNothing
} from './product.actions';
import { ServiceService } from 'src/app/Service/service.service';
import { map, exhaustMap, mergeMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable()
export class ProductEffect {

    productData = {
        productName: '',
        description: '',
        price: '',
        quantity: '',
        uid: '',
        image: ''
    }


    getProdData: any = {
        productName: '',
        description: '',
        price: '',
        quantity: '',
        uid: ''
    }


    constructor(private actions$: Actions, private service: ServiceService,
        private router: Router) {
    }

    //Loading all Product Data
    loadAllProducts$ = createEffect((): any => {
        return this.actions$.pipe(
            ofType(loadAllProducts),
            exhaustMap(() => {
                //callin service to get all product data from backend
                return this.service.getAllProducts().pipe(map((products: any) => {
                    //passing data to action to store data in "Store"
                    return loadProductSuccess({ products });
                })
                );
            })
        );
    });

    //Adding product Data to product table at backend
    addProduct$ = createEffect((): any => {
        return this.actions$.pipe(
            ofType(addProduct),
            mergeMap((action) => {

                this.productData.productName = action.productName;
                this.productData.description = action.description;
                this.productData.price = action.price;
                this.productData.quantity = action.quantity;
                this.productData.image = action.image;

                //calling service to send product data to backend 
                return this.service.addProduct(this.productData).pipe(map((products: any) => {

                    this.router.navigate(['/product/home'])
                    return loadProductSuccess({ products: products });
                })
                );
            })
        );
    });

    //Getting single product data
    getProductData$ = createEffect((): any => {
        return this.actions$.pipe(
            ofType(getProductData),
            exhaustMap((action) => {
                //calling service to get single product data
                return this.service.getProductData(action.id).pipe(map((data: any) => {
                    //calling an action to add single product data to cart table
                    return addCart({ carts: data });
                })
                );
            })
        );
    });

    //Adding product data to cart table at backend
    addCart$ = createEffect((): any => {
        return this.actions$.pipe(
            ofType(addCart),
            exhaustMap((action) => {
                //calling service to send product data at backend
                return this.service.addToCart(action.carts).pipe(map((carts: any) => {
                    this.router.navigate(['/product/myCart']);
                    return doNothing();
                })
                );
            })
        );
    });

    //Getting all Cart data
    getCartDetails$ = createEffect((): any => {
        return this.actions$.pipe(
            ofType(getCartDetails),
            exhaustMap((action) => {
                //callin service to get all Cart data
                return this.service.getCartDetails(action.uid).pipe(map((data: any) => {
                    //calling an action to send cart data to store in "Store"
                    return getCartDetailsSuccess({ carts: data });
                })
                );
            })
        );
    });

    //Deleting perticular product
    deleteFromcart$ = createEffect((): any => {
        return this.actions$.pipe(
            ofType(deleteFromCart),
            exhaustMap((action) => {
                //calling service to delete perticular product data
                return this.service.delete(action.id).pipe(map((carts: any) => {
                    return doNothing();
                })
                );
            })
        );
    });

    //Getting Ordered data
    getOrderDetails$ = createEffect((): any => {
        return this.actions$.pipe(
            ofType(getOrderData),
            exhaustMap((action) => {
                //calling service to get all Ordered data
                return this.service.getOrderDetails(action.uid).pipe(map((data: any) => {
                    //calling an action to store order data in "Store"
                    return getOrderDetailsSuccess({ orders: data });
                })
                );
            })
        );
    });

}
