import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../interface/product.interface';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  private productService = inject(ProductService);
  private route = inject(ActivatedRoute);
  
  public product!: Product;

  ngOnInit(): void {
    // Obtener el ID del producto desde los parámetros de la ruta
    const productId = Number(this.route.snapshot.paramMap.get('id'));

    if (productId) {
      // Llamar a fetchProducts() para asegurar que los productos estén disponibles
      this.productService.fetchProducts();
      // Usar el método getProductById del servicio
      this.product = this.productService.getProductById(productId)!;

      if (!this.product) {
        console.error(`Producto con ID ${productId} no encontrado.`);
      }
    } else {
      console.error('ID de producto inválido.');
    }
  }
}
