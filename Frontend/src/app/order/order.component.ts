import { Component } from '@angular/core';
import { OrderService } from '../order.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  orderId:any
  proceedWith : boolean =false
  orderForm = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    paymentmode: new FormControl(''),
    state: new FormControl(''),
    pin: new FormControl('')
  })
  constructor(private service:OrderService){}
  uId:any = sessionStorage.getItem("uId")
  marketOrders:any
  setFlagForMarketCancel: boolean= false
  checkMarketOrderVar:{ [key: number]: boolean } = {};
  ngOnInit(): void {
    this.service.getMarketOrderForUser(this.uId).subscribe(
      (result:any)=>{
        this.marketOrders=result.data
        console.log(this.marketOrders)
      }
      )
  }
  proceed(){
    this.proceedWith = true
    return this.proceedWith
  }
  checkMarketOrderDetails(orderId: number): void {
        this.checkMarketOrderVar[orderId] = !this.checkMarketOrderVar[orderId];
    }
 
  cancelMarketOrder(orderId:any){
    this.service.cancelOrder(orderId).subscribe(
      (result:any)=>{
        console.log(result)
        this.marketOrders=result.data
      }
    )
  }  
}
