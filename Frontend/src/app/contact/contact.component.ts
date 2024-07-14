import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor(private router:Router) {}
 
  contactForm = new FormGroup({
    uId: new FormControl("", [Validators.required]),
    uQueries: new FormControl("", [Validators.required]),
    uEmail: new FormControl("", [Validators.required]),
  });
 
  onSubmit() {
    console.log(this.contactForm.value)
    let user = {
      'uId': this.contactForm.value.uId,
      'uQueries': this.contactForm.value.uQueries,
      'uEmail': this.contactForm.value.uEmail
    }
}
feedback(){
  alert("Your query submitted successfully, will get back to you shortly!")
  this.router.navigate(['/'])
}
}
