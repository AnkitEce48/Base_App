import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ScarfComponent } from './scarf/scarf.component';
import { AccessoryComponent } from './accessory/accessory.component';
import { LogoutComponent } from './logout/logout.component';
import { ContactComponent } from './contact/contact.component';
import { SdetailsComponent } from './sdetails/sdetails.component';
import { AdetailsComponent } from './adetails/adetails.component';
import { OrderComponent } from './order/order.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    {'path':"",component: HomeComponent},
    {'path':"login",component: LoginComponent},
    {'path':"register",component: RegisterComponent},
    {'path':"aboutus",component: AboutUsComponent},
    {'path':"scarf",component: ScarfComponent},
    {'path':"accessory",component: AccessoryComponent},
    {'path':"logout",component: LogoutComponent},
    {'path':"contact",component: ContactComponent},
    {'path':"sdetails/:id",component: SdetailsComponent},
    {'path':"adetails/:id",component: AdetailsComponent},
    {'path':"order",component: OrderComponent},
    {'path':"cart",component: CartComponent}
];
