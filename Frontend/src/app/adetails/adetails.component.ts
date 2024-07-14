import { Component } from '@angular/core';
import { AccessoryComponent } from '../accessory/accessory.component';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductsService } from '../products.service';
import { UserService } from '../user.service';
import { OrderService } from '../order.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-adetails',
  standalone: true,
  imports: [AccessoryComponent,CommonModule,ReactiveFormsModule],
  templateUrl: './adetails.component.html',
  styleUrl: './adetails.component.css'
})
export class AdetailsComponent {
  id:any
  proceedWith : boolean =false
  accessory:any
  users:any
  status:any
  flag:boolean = false
  constructor(private pservice:ProductsService,private uservice:UserService,private oservice:OrderService,private arouter: ActivatedRoute,private router : Router){}
  ngOnInit(): void {
    if(this.uservice.isLoggedIn()!=true){
      this.router.navigate(["login"])
    }
    this.id = this.arouter.snapshot.paramMap.get("id")
    this.pservice.getAccessory(this.id).subscribe(
      (result:any)=>{
        this.accessory =result.data[0]
        console.log(this.accessory)
      }
    )
  }
  proceed(){
    this.proceedWith = true
    return this.proceedWith
  }
 
  placeOrder(){
    console.log(this.accessory)
    alert("Item added to Cart")
    this.oservice.placeCart(this.accessory).subscribe(
      result=>{
        this.router.navigate(['/cart'])
      }
    )
}
}
