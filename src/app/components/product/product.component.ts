import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  standalone:true,
  imports:[NgOptimizedImage, CommonModule],
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  // @Input() product: Product={
  //   title: 'Product',
  //   price: 0,
  //   id: 0,
  //   images: []
  // };
  @Input() product!: Product; // Se define que se espera un prop llamado product
}
