import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Auth-Guard/auth-guard.service';
import { HeaderFooterModule } from './Components/header-footer/header-footer.module';
import { ProductModule } from './Components/product/product.module';
import { LoginComponent } from './Components/user/login/login.component';
import { UserModule } from './Components/user/user.module';

const routes: Routes = [
  {
    path:"",
    pathMatch:'full',
    component:LoginComponent
  },
  {
    path:'user',
    loadChildren : () => UserModule
  },
  {
    path:'navbar',
    loadChildren : () => HeaderFooterModule
  },
  {
    path:'product',
    loadChildren: () => ProductModule,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
