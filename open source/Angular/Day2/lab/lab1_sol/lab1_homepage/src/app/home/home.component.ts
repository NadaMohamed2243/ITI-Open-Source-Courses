import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { ProductsComponent } from "../products/products.component";
import { CategoriesComponent } from "../categories/categories.component";
import { FooterComponent } from "../footer/footer.component";
import { SettingComponent } from "../setting/setting.component";

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, ProductsComponent, CategoriesComponent, FooterComponent, SettingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
