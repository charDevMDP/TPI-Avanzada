import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
url = 'https://utn-lubnan-api-4.herokuapp.com/api'

  constructor(private http:HttpClient ) {}

  getCategory(){
      return this.http.get(this.url+'/ProductCategory');
  }
}
