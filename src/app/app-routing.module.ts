import { ShoppingCartPageComponent } from './pages/shopping-cart-page/shopping-cart-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ProductsPageComponent},
  { path: 'products', component: ProductsPageComponent },
  { path: 'shopping-cart', component: ShoppingCartPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
