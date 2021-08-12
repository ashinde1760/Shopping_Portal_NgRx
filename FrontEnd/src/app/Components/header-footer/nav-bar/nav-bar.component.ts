import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Input() deviceXs: any;
  cartCount: any = [];

  constructor(private router: Router, private cookie: CookieService, private service: ServiceService) { }

  ngOnInit(): void {

    let uid = JSON.parse(localStorage.getItem('uid') || '{}');
    this.service.getCartDetails(uid).subscribe((res: any) => {
      let count = 0;
      for (var inde of res) {
        count++;
      }
      this.cartCount = count;
    }, (error) => {
      alert('something went wrong');
    }
    );



  }

  logout() {
    localStorage.clear();
    this.cookie.deleteAll('token');
    this.router.navigate(["/user/login"]);
  }

}
