import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIProductsService } from 'src/app/Services/apiproducts.service';
import { IProduct } from 'src/app/ViewModel/iproduct';
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
  newProductd: IProduct={} as IProduct;

  constructor(private productService:APIProductsService,private router :Router) {

    this.newProductd={
      id:10,
      name:"toshiba",
      price:12,
      quantity:90,
      categoryid:1,
      image:"assets/p3..jfif"
    }
   }

  ngOnInit(): void {
  }
  SaveProduct()
  {
    this.productService.AddNewProduct(this.newProductd).subscribe(newProduct=>
      {
        this.router.navigate(['/Products'])

      }
      )

   }

}
