import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ProductComponent } from 'src/app/components/product/product.component';
import { Product } from 'src/app/models/product.model';

@Component({
  standalone:true,
  imports:[ProductComponent, CommonModule],
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  loading = true;
  title = 'Hola'
  products: Product[]=[];
  http = inject(HttpClient); // patron singleton, patron de injeccion de dependency
  changeTitle(){
    this.title = 'changed';
  }

  ngOnInit(): void {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data) => {
        this.products = data;
        this.loading = false;
      })
  }
}
