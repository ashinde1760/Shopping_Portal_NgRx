import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from '../Service/service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service:ServiceService,private router:Router){}

  canActivate():boolean
  {
    if(this.service.loggedIn())
    {
      return true;
    }
    else
    {
      this.router.navigate(['/user/login']);
    }
    return false;
  }
}


