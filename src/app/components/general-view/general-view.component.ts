import { ProductService } from './../../services/product.service';
import { Component, inject } from '@angular/core';
import { Product } from './../../interface/product.interface';
import { CardProductComponent } from "../card-product/card-product.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-general-view',
  standalone: true,
  imports: [CardProductComponent, NgFor],
  templateUrl: './general-view.component.html',
  styleUrl: './general-view.component.css'
})
export class GeneralViewComponent {

  private ProductsService = inject(ProductService);

  constructor(){
    this.ProductsService.fetchProducts();
  }

  public get products(): Product[]{
    return this.ProductsService.products;
  }
}
