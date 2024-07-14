import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
 
  constructor(private router: Router,private service:UserService) {}
 
  registerForm = new FormGroup({
    uId: new FormControl("", [Validators.required]),
    uPass: new FormControl("", [Validators.required]),
    uEmail: new FormControl("", [Validators.required])
  });
 
  onSubmit() {
    console.log(this.registerForm.value)
    let user = {
      'uId': this.registerForm.value.uId,
      'uPass': this.registerForm.value.uPass,
      'uEmail': this.registerForm.value.uEmail
    }
    this.service.registerUser(user).subscribe()
    alert("You have successfully registered as " + this.registerForm.value.uId)
    this.router.navigate(["/login"])
  }
}
