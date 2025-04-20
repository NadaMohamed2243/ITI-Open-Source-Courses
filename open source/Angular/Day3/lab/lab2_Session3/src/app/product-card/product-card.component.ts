import { Component, Input, input } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  // product = input<Product>();
  @Input() product: Product = {} as Product;
}
