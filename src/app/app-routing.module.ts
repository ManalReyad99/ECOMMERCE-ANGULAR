import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{HomeComponent} from './Components/home/home.component';
import{ParentCardComponent} from './Components/parent-card/parent-card.component';
import{ProductDetalisComponent} from './Components/product-detalis/product-detalis.component';
import{ContactUsComponent} from './Components/contact-us/contact-us.component';
import{NotFoundPageComponent} from './Components/not-found-page/not-found-page.component';
import{AboutUsComponent} from './Components/about-us/about-us.component';
import { MainLayOutComponent } from './Components/main-lay-out/main-lay-out.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { NewProductComponent } from './Components/new-product/new-product.component';
const routes: Routes = [
   {path: '', component:MainLayOutComponent, children: [
     {path:'', redirectTo:'/Home', pathMatch:'full'},
    {path:'Home', component:HomeComponent},
     {path:'ParentCard', component:ParentCardComponent},
    {path:'ParentCard/:pid', component:ProductDetalisComponent},
    {path:'ContactUs', component:ContactUsComponent},
    {path:'AboutUs',component:AboutUsComponent},
    {path:'NewProduct', component:NewProductComponent},

   ]},
   {path:'Register',component:RegisterComponent},
   {path:'Login',component:LoginComponent},

   {path:'**', component:NotFoundPageComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
