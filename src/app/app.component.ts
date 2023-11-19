import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

