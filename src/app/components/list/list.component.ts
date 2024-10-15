import { Component, inject, Input } from '@angular/core';
import { Product } from '../../interface/product.interface';
import { NgFor } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { ListProductComponent } from "../list-product/list-product.component";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor, ListProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  private ProductsService = inject(ProductService);

  constructor(){
    this.ProductsService.fetchProducts();
  }

  public get products(): Product[]{
    return this.ProductsService.products;
  }
}
