import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { ProductsService } from './products.service';
import { HttpClient } from '@angular/common/http';
import { apiUrls } from './api.url';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  checkCart() {
    throw new Error('Method not implemented.');
  }
  orders:any=[]
  market: any;
  constructor(private pService:ProductsService, private http:HttpClient) {
   }
   placeOrder(cart:any,order:any){
    console.log(order)
     let totalPrice=0
      for(let object of cart){
        totalPrice+=object.price
      }
     return this.http.post<any>(`${apiUrls.orderServiceApi}place-order`,{order,cart,totalPrice})
    }

    getMarketOrderForUser(userId:any){
      console.log(userId)
      return this.http.get(`${apiUrls.orderServiceApi}history/${userId}`)
    }
    cancelOrder(orderId:any){
      let uId= sessionStorage.getItem('uId')
      return this.http.post(`${apiUrls.orderServiceApi}cancel-order`,{orderId,uId})
    }
    placeCart(order:any){
      order["id"]=sessionStorage.getItem("uId")
      console.log(order)
      return this.http.post<any>(`${apiUrls.cartServiceApi}place-cart`,order)
    }
 
    showCart(id:any){
      return this.http.post(`${apiUrls.cartServiceApi}show-cart`,{id})
    }
    removeCartItem(id:any){
      let uId=sessionStorage.getItem("uId")
      return this.http.delete(`${apiUrls.cartServiceApi}delete-item/${id}/${uId}`)
    }
    addTotal(cart:any){
         let count=0;
         for(let product of cart){
             count+=product.price
         }
         return count
    }
  }
