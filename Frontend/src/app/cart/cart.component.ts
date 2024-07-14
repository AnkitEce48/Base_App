import { CommonModule } from "@angular/common";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { OrderService } from "../order.service";
import { UserService } from "../user.service";
import { ScarfComponent } from "../scarf/scarf.component";
import { AccessoryComponent } from "../accessory/accessory.component";
import { Router } from "@angular/router";
 
@Component({
    selector: 'app-cart',
    standalone: true,
    imports: [CommonModule,ReactiveFormsModule,ScarfComponent,AccessoryComponent],
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.css'
  })
  export class CartComponent implements OnInit{
    constructor(private service:OrderService, public logService:UserService, private router:Router){}
    proceedWith:boolean=false
    addPrice:any=0;
    noOrder:boolean=false;
    id:any=sessionStorage.getItem("uId")
    cart:any=[]
    orderForm = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    phoneNumber: new FormControl(''),
    paymentmode: new FormControl(''),
    state: new FormControl(''),
    pin: new FormControl('')
  })
 
    ngOnInit(): void {
        if(this.logService.isLoggedIn()){
 
            this.service.showCart(this.id).subscribe(
                (result:any)=>{
                    console.log(result)
                    this.cart=result.data
                }
            )
        }
    }
    removeCart(id:any){
        this.service.removeCartItem(id).subscribe(
            (result:any)=>{
                console.log(result)
                this.cart = result.data
            }
        )
    }
    buyNow(){
        this.proceedWith=true;
        this.addPrice=this.service.addTotal(this.cart)
    }
    placeOrder(){
        let order ={
      'uId':sessionStorage.getItem("uId"),
      'name': this.orderForm.value.name,
      'address':this.orderForm.value.address,
      'pin':this.orderForm.value.pin,
      'phoneNumber':this.orderForm.value.phoneNumber,
      'paymentmode':this.orderForm.value.paymentmode,
      'state':this.orderForm.value.state,
      'orderDate':new Date(),
    }
    this.service.placeOrder(this.cart,order).subscribe(
        (result:any)=>{
            console.log(result)
            alert(`${result.title}, Price: ₹${result.price}`)
            this.router.navigate(["/order"])
        }
    )
    }
    goToHome(){
        this.router.navigate(["/"])
    }
}