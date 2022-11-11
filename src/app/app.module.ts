import { AuthInterceptorService } from './services/auth-interceptor.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ShoppingCartPageComponent } from './pages/shopping-cart-page/shopping-cart-page.component';
import { ShoppingCartListComponent } from './components/shopping-cart-list/shopping-cart-list.component';
import { SummaryPageComponent } from './pages/summary-page/summary-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsPageComponent,
    ProductsListComponent,
    LoginPageComponent,
    ShoppingCartPageComponent,
    ShoppingCartListComponent,
    SummaryPageComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { // necesario para que ande los interceptores
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true // indica que puede tenes multiples interceptores, import el orden
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
