import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ShoppingCartPageComponent } from './pages/shopping-cart-page/shopping-cart-page.component';
import { ShoppingCartListComponent } from './components/shopping-cart-list/shopping-cart-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsPageComponent,
    ProductsListComponent,
    LoginPageComponent,
    ShoppingCartPageComponent,
    ShoppingCartListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
