import { Product } from './../../models/product';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.css']
})
export class SummaryPageComponent implements OnInit {

  countProducts: number = 0 ;

  totalcart: number = 0

  loading: boolean = true;
  
  productsIds: [] = [];

  products: any = [];
  constructor(private _productsService: ProductsService ) { }

  ngOnInit(): void {
    this.loading = true

    this.productsIds = JSON.parse(localStorage.getItem('productsIds') || '[]');
    console.log('IDS  ', this.productsIds)
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
      console.log('ID ', id)
      this.products.forEach( (prod: Product) => {
          if(prod.productId == id){
            if(prod.price){
              this.totalcart = this.totalcart + prod.price
            } 
            productsFilters.push(prod)
          }
      }); 
    })
    this.products = productsFilters;
    this.countProducts = this.products.length
  }

    deleteCart(id:number){
    let some = this.products.some((prod: Product) => prod.productId == id);
    let prod:Product =  this.products.find((prod: Product) => prod.productId == id);

    console.log('SOME ', some)
    if(some){

      this.products = this.products.filter((prod: Product) => prod.productId != id)
      if(prod.price){
        this.totalcart = this.totalcart - prod.price
      }
      
      this.countProducts = this.countProducts - 1;
    }
  }

}
