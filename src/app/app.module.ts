import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SideMenuComponent } from './Components/side-menu/side-menu.component';
import { ProductComponent } from './Components/product/product.component';
import { FormsModule } from '@angular/forms';
import { CardDirective } from './Directive/card.directive';
import { NationalNumberPipe } from './Pipes/national-number.pipe';
import { ChangeCreditFormatPipe } from './Pipes/change-credit-format.pipe';
import { ParentCardComponent } from './Components/parent-card/parent-card.component';
import { ChildCardComponent } from './Components/child-card/child-card.component';
import { HomeComponent } from './Components/home/home.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';
import { ProductDetalisComponent } from './Components/product-detalis/product-detalis.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { MainLayOutComponent } from './Components/main-lay-out/main-lay-out.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { NewProductComponent } from './Components/new-product/new-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideMenuComponent,
    ProductComponent,
    CardDirective,
    NationalNumberPipe,
    ChangeCreditFormatPipe,
    ParentCardComponent,
    ChildCardComponent,
    HomeComponent,
    ContactUsComponent,
    NotFoundPageComponent,
    ProductDetalisComponent,
    AboutUsComponent,
    MainLayOutComponent,
    LoginComponent,
    RegisterComponent,
    NewProductComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
