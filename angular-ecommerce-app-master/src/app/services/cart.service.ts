import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ApiService } from './api.service';
import { Products, Product } from '../shared/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartData = {
    products: [],
  };

  cartDataObs$ = new BehaviorSubject(this.cartData);

  constructor(
    private _notification: NzNotificationService,
    private _api: ApiService
  ) {
  }



  createOrder(params): void {

    return this._api.postTypeRequestAuth('orders', {
      params
    }).pipe(
      map((res: any) => {
      this._notification.create(
        'success',
        'Product added to cart',
        `${params.name} was successfully added to the cart`
      )
      this.cartDataObs$.next({ ...this.cartData })
      localStorage.setItem('cart', JSON.stringify(this.cartData));
      })
    );
    
 
  }

  getAllOrders(): Observable<Products> {
    return this._api.getTypeRequest('orders');
  }


}
