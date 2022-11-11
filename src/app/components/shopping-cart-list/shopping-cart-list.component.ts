import { Product } from 'src/app/models/product';
import { ProductsService } from './../../services/products.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart-list',
  templateUrl: './shopping-cart-list.component.html',
  styleUrls: ['./shopping-cart-list.component.css']
})
export class ShoppingCartListComponent implements OnInit {


  countProducts: number = 0 ;
  
  @Input() productsIds: [] = [];

  products: any = [];
  constructor(private _productsService: ProductsService ) { }

  ngOnInit(): void {
    this.getProducts()
  }

    getProducts(){
      this._productsService.getProducts().subscribe(response => {

      this.products = response
      this.filtrarProducts();
    })
    
  }

  filtrarProducts(){
    let productsFilters:any = [];
    this.productsIds.map((id:number) => {
      this.products.forEach( (prod: Product) => {
          if(prod.productId == id){
            productsFilters.push(prod)
          }
      }); 
    })
    this.products = productsFilters;
    this.countProducts = this.products.length
  }

    deleteCart(id:number){
    let some = this.products.some((prod: Product) => prod.productId == id);
    console.log('SOME ', some)
    if(some){
      this.products = this.products.filter((prod: Product) => prod.productId != id)
      this.countProducts = this.countProducts - 1; 
    }
  }
}
