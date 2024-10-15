import { Component, inject, Input } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interface/product.interface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [NgFor],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})
export class ListProductComponent {

  @Input()
  public product: Product = {
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: {
      rate: 0,
      count: 0
    }
  };

  
}
