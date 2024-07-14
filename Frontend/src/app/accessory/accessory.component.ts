import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { AdetailsComponent } from '../adetails/adetails.component';

@Component({
  selector: 'app-accessory',
  standalone: true,
  imports: [CommonModule,AdetailsComponent,RouterLink,RouterOutlet,RouterModule],
  templateUrl: './accessory.component.html',
  styleUrl: './accessory.component.css'
})
export class AccessoryComponent implements OnInit{
  accessories:any=[]
  constructor(private service:ProductsService,private router:Router){}
  ngOnInit(): void {
    this.service.getAccessories().subscribe(
      (result:any)=>{
        this.accessories=result.data
      }
    )
  }
  onSubmit(id:any){
    console.log(id)
    this.router.navigate(["/adetails/"+id])
  }
}
