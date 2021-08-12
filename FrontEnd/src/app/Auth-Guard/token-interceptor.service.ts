import { ServiceService } from './../Service/service.service';
import { HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector:Injector) { }

  intercept(req:any,next:any){
    let service=this.injector.get(ServiceService);
    let tokenizerReq=req.clone(
      {
        setHeaders:{
          Authorization:`Bearer ${service.getToken()}`
        }
      }
    )
    return next.handle(tokenizerReq);
  }
}
