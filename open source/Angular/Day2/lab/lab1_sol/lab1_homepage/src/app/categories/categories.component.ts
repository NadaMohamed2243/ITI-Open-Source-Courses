import { Component } from '@angular/core';
import { Category } from '../category';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
categories: Category[] = [
  {id: 1, imageUrl: "images/categories/category1.jpg", price: 300 },
  {id: 2, imageUrl: "images/categories/category2.jpg", price: 400 },
  {id: 3, imageUrl: "images/categories/category3.jpg", price: 500 },
]
}
