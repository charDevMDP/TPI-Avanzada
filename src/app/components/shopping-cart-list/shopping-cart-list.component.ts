import { Router } from '@angular/router';
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

  loading: boolean = true;
  
  @Input() productsIds: any = [];

  products: any = [];
  constructor(private _router: Router, private _productsService: ProductsService ) { }

  ngOnInit(): void {
    this.loading = true
    this.getProducts()
  }

    getProducts(){
      this._productsService.getProducts().subscribe(response => {

      this.products = response
      this.loading = false
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
    if(some){
      this.products = this.products.filter((prod: Product) => prod.productId != id);
      this.productsIds = this.productsIds.filter((idP:number) => idP != id);
      this.countProducts = this.countProducts - 1;
    }
  }

  goSummary(){
    console.log('LOS IDS ' , this.productsIds)
    localStorage.setItem('productsIds', JSON.stringify(this.productsIds))
    this._router.navigate(['/summary'])
    
  }
}
