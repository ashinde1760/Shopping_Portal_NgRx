import { TokenInterceptorService } from './Auth-Guard/token-interceptor.service';
import { AuthGuard } from './Auth-Guard/auth-guard.service';
import { ProductEffect } from './Components/product/store/product.effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from "@ngrx/effects";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderFooterModule } from './Components/header-footer/header-footer.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { appReducer } from './store/app.state';
import { UserEffect } from './Components/user/state/user.effect';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { UserModule } from './Components/user/user.module';




@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderFooterModule,
    HttpClientModule,
    UserModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([UserEffect, ProductEffect]),
  ],
  providers: [AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

