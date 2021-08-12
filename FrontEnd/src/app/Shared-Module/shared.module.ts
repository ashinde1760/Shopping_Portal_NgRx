import { MatSidenavModule } from '@angular/material/sidenav';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort'
import { MydemoLibModule } from '@shivrajgodle/mydemo-lib';
import { CreditCardDirectivesModule } from 'angular-cc-library';
import { MatPaginatorModule } from '@angular/material/paginator';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    CreditCardDirectivesModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    ReactiveFormsModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatSnackBarModule,
    MatBadgeModule,
    MatSelectModule,
    MatTableModule,
    MatSortModule,
    MydemoLibModule,
    MatPaginatorModule
  ],
  exports:[
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatSnackBarModule,
    MatBadgeModule,
    MatSelectModule,
    MatSidenavModule,
    MatTableModule,
    MatSortModule,
    MydemoLibModule,
    CreditCardDirectivesModule,
    MatPaginatorModule,
  ]
})
export class SharedModule { }
