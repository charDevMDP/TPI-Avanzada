import { Product } from './../models/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url = 'https://utn-lubnan-api-4.herokuapp.com/api'

  constructor(private http:HttpClient ) {}

  ngOnInit(): void {
  }

  getProducts(){
      return this.http.get(this.url+'/Product');
  }

  getProductById(id:any){
    return this.http.get(this.url+'/Product/'+id)
  }

  updateProduct(product:any){
    return this.http.put(this.url+'/Product',product);
  }


}