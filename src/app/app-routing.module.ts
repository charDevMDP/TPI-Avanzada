import { AuthGuard } from './guards/auth.guard';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SummaryPageComponent } from './pages/summary-page/summary-page.component';
import { ShoppingCartPageComponent } from './pages/shopping-cart-page/shopping-cart-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ProductsPageComponent},
  { path: 'products', component: ProductsPageComponent },
  { path: 'shopping-cart', component: ShoppingCartPageComponent},
  { path: 'summary', component: SummaryPageComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
