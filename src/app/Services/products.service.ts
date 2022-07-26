import { Injectable } from '@angular/core';
import { IProduct } from '../ViewModel/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  ProductList:IProduct[];
  constructor() {


    this.ProductList=[]
    //   {
    //     ID:1,
    //     Name:"Labtop Dell",
    //     Quantity:150,
    //     Price:15000,
    // Image:"assets/p1.jpg",
    // CategoryId:1
    
    //   },
    //   {
    //     ID:2,
    //     Name:"Labtop Apple",
    //     Quantity:150,
    //     Price:35000,
    // Image:"assets/p1.jpg",
    // CategoryId:1
    
    //   },
    //   {
    //     ID:3,
    //     Name:"Labtop Lenovo",
    //     Quantity:150,
    //     Price:22000,
    // Image:"assets/p1.jpg",
    // CategoryId:1
    
    //   }
    //   ,
    //   {
    //     ID:4,
    //     Name:"PC",
    //     Quantity:100,
    //     Price:8000,
    // Image:"assets/p2.jpg",
    // CategoryId:3
    //   },
    //   {
    //     ID:5,
    //     Name:"PC",
    //     Quantity:100,
    //     Price:10000,
    // Image:"assets/p2.jpg",
    // CategoryId:3
    //   },
    //   {
    //     ID:6,
    //     Name:"Phone Samsung",
    //     Quantity:130,
    //     Price:5000,
    // Image:"assets/p4.jpg",
    // CategoryId:2
    
    //   },
    //   {
    //     ID:7,
    //     Name:"phone IPhone",
    //     Quantity:2,
    //     Price:15000,
    // Image:"assets/p4.jpg",
    // CategoryId:2
    
    //   },
    //   {
    //     ID:8,
    //     Name:"phone IPhone pro max",
    //     Quantity:80,
    //     Price:20000,
    // Image:"assets/p4.jpg",
    // CategoryId:2
    
    //   }
    // ]

   }

GetAllProuducts():IProduct[]|undefined
{
  return this.ProductList;
}


getProductsByCateogryID(catID: number): IProduct[] {
  if (catID == 0) {
    return this.ProductList;
  }
  else
    return this.ProductList.filter(prd => prd.categoryid== catID);
}

getProductByID(prdID: number): IProduct|undefined
{
  return this.ProductList.find(prd=>prd.id==prdID);
}

addNewProduct(prd:IProduct):void
{
  this.ProductList.push(prd);
}

getPrdIDsList(): number[]
{
  return this.ProductList.map(prd=>prd.id);
}




}
