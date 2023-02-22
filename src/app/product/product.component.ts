import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products: any[];
  loading = false;

  constructor(
    private _product: ProductService,
    private _cart: CartService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this._cart.getAllOrders().subscribe((products) => {
      console.log(products);
      this.products = products;
      this.loading = false;
    });
      
  }

  addToCart(product): void {
    this._cart.createOrder({
      name: product.name,
      price: product.price,
      phoneNumber: product.phoneNumber
    });
  }
}
