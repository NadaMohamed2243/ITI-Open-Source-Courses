import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-products',
  imports: [ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {


  products!: Product[];
  topJewelryProducts!: Product[];
  constructor(private productsService: ProductsService){
    this.products = productsService.products;
    this.topJewelryProducts = productsService.getTopCategoryProducts('jewelery');
  }
}
