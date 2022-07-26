import { Component, OnInit } from '@angular/core';
import { DiscountOffer } from 'src/app/ViewModel/discount-offer';
import { ICategory } from 'src/app/ViewModel/icategory';
import { IProduct } from 'src/app/ViewModel/iproduct';
import { Store } from 'src/app/ViewModel/store';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
discount:DiscountOffer=DiscountOffer.DiscoundTenper;
store:Store;
ClientName:string;
ProductList:IProduct[];
newProductList:IProduct[];
selectedCatID:number=0;
Categories:ICategory[]=[];
isTableShown:boolean=false;
dateTime:Date=new Date();
  constructor() {


this.ClientName="Manal";
this.newProductList=[];
this.ProductList=[]
 // {
//     ID:1,
//     Name:"LabtopDell",
//     Quantity:150,
//     Price:25000,
// Image:"assets/p3.jfif",
// CategoryId:1

//   },
//   {
//     ID:2,
//     Name:"LabtopApple",
//     Quantity:150,
//     Price:55000,
// Image:"assets/p1.jpg",
// CategoryId:1

//   }
//   ,
//   {
//     ID:3,
//     Name:"PC",
//     Quantity:100,
//     Price:8000,
// Image:"assets/p2.jpg",
// CategoryId:3
//   },
//   {
//     ID:4,
//     Name:"Phone Samsung",
//     Quantity:130,
//     Price:5000,
// Image:"assets/p4.jpg",
// CategoryId:2

//   },
//   {
//     ID:5,
//     Name:"phone IPhone",
//     Quantity:1,
//     Price:15000,
// Image:"assets/p4.jfif",
// CategoryId:2

// }
 //]
this.store={
  Name:"Cairo Store",
  Logo:"assets/logo.jpg",
  branches:["Cairo","Assiut","Alex"]
}
this.Categories=[
  {
  id:1,
  name:"Labtops"
},
{
  id:2,
  name:"Phones"
},
{
  id:3,
  name:"PCs"
}
]

   }

  ngOnInit(): void {
  }
  ShowProducts(id:number)
  {
  //   if(this.selectedCatID==0)
  //   {
  //     this.newProductList= this.ProductList
  //   }
  // this.newProductList= this.ProductList.filter(el=>el.CategoryId==id);
 // this.newProductList= this.ProductList!.filter(el=>el.CategoryId==id);

  
  }
  // HideTable(){
  //   this.isTableShown=!this.isTableShown;


  // }
  // Decrease(product:IProduct)
  // {  


  //   product.Quantity=product.Quantity-1;
  // }

}
