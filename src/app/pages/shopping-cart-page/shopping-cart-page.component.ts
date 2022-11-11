import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shopping-cart-page',
  templateUrl: './shopping-cart-page.component.html',
  styleUrls: ['./shopping-cart-page.component.css']
})
export class ShoppingCartPageComponent implements OnInit {

  productsIds: [] = [];


  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.queryParams.subscribe( (params) => { this.productsIds = params[0]});
   
  }



}
