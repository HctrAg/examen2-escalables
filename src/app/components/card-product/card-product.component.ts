import { NgFor } from '@angular/common';
import { Product } from './../../interface/product.interface';
import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-card-product',
  standalone: true,
  imports: [NgFor],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.css'
})
export class CardProductComponent {


  @Input()
  public product!: Product;

  constructor(private router: Router) {}

  viewDetails(): void {
    this.router.navigate([`/product`, this.product.id]);  // Navega al detalle del producto usando su ID.
  }
  
}
