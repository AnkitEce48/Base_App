import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrls } from './api.url';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users:any=[{'uId':'admin','uPass':'12345678','uEmail':'admin@123'}]
  constructor(private http:HttpClient) {

   }
  registerUser(user:any){
    console.log(user)
    return this.http.post<any>(`${apiUrls.authServiceApi}register`,user)
  }
  loginUser(id:any,pass:any){
    let loginUser={
      id,
      pass
    }
   return this.http.post<any>(`${apiUrls.authServiceApi}login`,loginUser)
  }

  isLoggedIn(): boolean {
    if (typeof window !== 'undefined') {
      const result = sessionStorage.getItem('loggedIn');
      return result === 'true';
    }
    return false;
  }
}
