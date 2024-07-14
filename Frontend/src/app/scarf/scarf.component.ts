import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { SdetailsComponent } from '../sdetails/sdetails.component';


@Component({
  selector: 'app-scarf',
  standalone: true,
  imports: [CommonModule,SdetailsComponent,RouterLink,RouterModule,RouterOutlet],
  templateUrl: './scarf.component.html',
  styleUrl: './scarf.component.css'
})
export class ScarfComponent implements OnInit{
  scarves:any=[]
  constructor(private service:ProductsService,private router: Router){}
  ngOnInit(): void {
    this.service.getScarves().subscribe(
      (result:any)=>{
        this.scarves=result.data
      }
    )
  }
  onSubmit(id:any){
    console.log(id)
    this.router.navigate(["/sdetails/"+id])
  }
}
