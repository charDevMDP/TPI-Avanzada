import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service'
import { CategoriesService} from '../../services/categories.service'
import { Product } from 'src/app/models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
 products: any = [];
  productsFilters: any = [];
  categories: any = [0,1,2,3,4,5]

  productsSelected: Array<number> = [];

  loading: boolean = false;
  countProducts: number = 0;
  seleccionado: any = '-1'
  constructor(private route: Router, private _productsService: ProductsService, private _categoryService:CategoriesService) { }

  ngOnInit(): void {

    this.loading = true
    this._productsService.getProducts().subscribe(response => {
      this.loading = false
      console.table(response) // poder ver en la consola que te viene
      this.products = response
      this.productsFilters = this.products
    })
    this._categoryService.getCategory().subscribe(response => {
      console.log('Categorias')
      console.log(response)
      this.categories = response
    })
  }

  addCart(id:number){
    let some = this.productsSelected.some((idProd:any) => idProd == id);
    if(!some){
      this.productsSelected.push(id);
      console.log('PS ', this.productsSelected)
      this.countProducts = this.countProducts + 1; 
    }
  }

  deleteCart(id:number){
    let some = this.productsSelected.some((idProd:any) => idProd == id);
    if(some){
      this.productsSelected = this.productsSelected.filter((idProd:number) => idProd != id)
      this.countProducts = this.countProducts - 1; 
    }
  }

  exists(id:number){
    let exist = false
    if(this.productsSelected.length > 0){
       let prod = this.productsSelected.find((idProd:any) => idProd == id);
       if(prod !== undefined) exist = true
    }

    return exist
  }

  Filtrar(){
   if(this.seleccionado != '-1'){
     this.productsFilters = this.products.filter((prod:any) => prod.productCategoryId == this.seleccionado)
   }else{
     this.productsFilters = this.products
   }
    
  }

  irCarrito(){
    this.route.navigate(['/shopping-cart'],{queryParams: [this.productsSelected] })
  }


}
