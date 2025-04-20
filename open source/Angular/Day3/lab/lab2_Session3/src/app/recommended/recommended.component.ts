import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { ProductCardComponent } from "../product-card/product-card.component";

@Component({
  selector: 'app-recommended',
  imports: [ProductCardComponent],
  templateUrl: './recommended.component.html',
  styleUrl: './recommended.component.css'
})
export class RecommendedComponent {
  // products!: Product[];
  //   constructor(x: ProductsService) {
  //     this.products = x.products;
  //   }

  recommendedProducts!: Product[];
  categories!: string[];


  constructor(private productsService: ProductsService) {
   // intialize the recommendedProducts with top rated products
    this.recommendedProducts = this.productsService.getOneOfEachCategory();


    this.categories = this.productsService.getCategories();
    console.log(this.categories)
  }

  ChooseCategory(category: string) {
    this.recommendedProducts = this.productsService.getRecommendedProducts(category);
  }
}

