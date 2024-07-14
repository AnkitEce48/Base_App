import { Component } from '@angular/core';
import { ScarfComponent } from '../scarf/scarf.component';
import { ActivatedRoute, Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ProductsService } from '../products.service';
import { UserService } from '../user.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { OrderService } from '../order.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sdetails',
  standalone: true,
  imports: [ScarfComponent,CommonModule, ReactiveFormsModule],
  templateUrl: './sdetails.component.html',
  styleUrl: './sdetails.component.css'
})
export class SdetailsComponent {
  id:any
  proceedWith : boolean =false
  scarf:any
  users:any
  status:any
  flag:boolean = false
  constructor(private pservice:ProductsService,private uservice:UserService,private oservice:OrderService,private arouter: ActivatedRoute,private router : Router){}
  ngOnInit(): void {
    if(this.uservice.isLoggedIn()!=true){
      this.router.navigate(["login"])
    }
    this.id = this.arouter.snapshot.paramMap.get("id")
    this.pservice.getScarf(this.id).subscribe(
      (result:any)=>{
        this.scarf = result.data[0]
        console.log(this.scarf)
      }
    )
  }
  proceed(){
    this.proceedWith = true
    return this.proceedWith
  }
 
  placeOrder(){
    console.log(this.scarf)
    alert("Item added to cart")
    this.oservice.placeCart(this.scarf).subscribe(
      result=>{
        this.router.navigate(['/cart'])
      }
    )
}
}
