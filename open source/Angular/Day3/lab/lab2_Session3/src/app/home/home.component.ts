import { Component } from '@angular/core';
import { ProductsComponent } from "../products/products.component";
import { CategoriesComponent } from "../categories/categories.component";
import { SettingComponent } from "../setting/setting.component";
import { RecommendedComponent } from "../recommended/recommended.component";

@Component({
  selector: 'app-home',
  imports: [ CategoriesComponent, SettingComponent, RecommendedComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
