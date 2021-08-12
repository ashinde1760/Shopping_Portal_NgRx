import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SharedModule } from '../../Shared-Module/shared.module';




@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ],
  exports:[
    NavBarComponent
  ]
})
export class HeaderFooterModule { }
