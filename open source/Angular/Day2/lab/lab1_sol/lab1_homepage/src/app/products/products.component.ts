import { Component } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products : Product[] = [
    {id: 1, imageUrl: "images/products/product1.jpg", price: 100, name: "Product 1" ,sale: true},
    {id: 2, imageUrl: "images/products/product2.jpg", price: 200, name: "Product 2", sale: false},
    {id: 3, imageUrl: "images/products/product3.jpg", price: 300, name: "Product 3", sale: true},
    {id: 4, imageUrl: "images/products/product4.jpg", price: 400, name: "Product 4", sale: true},
    {id: 5, imageUrl: "images/products/product5.jpg", price: 500, name: "Product 5", sale: false},
  ];
}
