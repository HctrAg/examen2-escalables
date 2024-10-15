import { inject, Injectable } from '@angular/core';
import { Product } from '../interface/product.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  private http = inject(HttpClient);
  private apiUrl = "https://fakestoreapi.com/products";

  private _products: Product[] = [];

  public fetchProducts(){
    this.http.get<Product[]>(this.apiUrl).subscribe({
      next: (response) => {
        console.log(response);
        this._products = response;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  public getProductById(id: number): Product | undefined {
    return this._products.find(product => product.id === id);
  }

  public get products(){
    return this._products;
  }
}
