import {AfterViewInit, Component, OnInit, ViewChild,ElementRef, OnDestroy } from '@angular/core';
import { APICategoriesService } from 'src/app/Services/apicategories.service';
import { APIProductsService } from 'src/app/Services/apiproducts.service'
import { ICategory } from 'src/app/ViewModel/icategory';
import { ChildCardComponent } from '../child-card/child-card.component';
import { ICard } from '../CradViewModel/icard';
import { Subscription } from 'rxjs';
import { IProduct } from 'src/app/ViewModel/iproduct';

@Component({
  selector: 'app-parent-card',
  templateUrl: './parent-card.component.html',
  styleUrls: ['./parent-card.component.scss']
})
export class ParentCardComponent implements OnInit,AfterViewInit,OnDestroy{
CategoryList:ICategory[]=[];
SelectedCatID:number=0;
cardItems:ICard[]=[];
ProductShosen!:IProduct;
TotlalPriceOfAllSelectedProduct:number=0;
@ViewChild(ChildCardComponent)ChildData!:ChildCardComponent;
 @ViewChild('RemoveButton') RemoveBtn: ElementRef= {} as ElementRef;
 AllSubscriptions:Subscription[]=[];

  constructor(private productServices:APIProductsService,private categoryService:APICategoriesService) {

    let Subscriber= this.categoryService.GetAllCategories().subscribe(AllCategories=>{
     this.CategoryList=AllCategories
   })

   this.AllSubscriptions.push(Subscriber);


   }

  ngOnInit(): void {
  }


  AddProductsToCard(ShoppingCardItems:ICard)
  {  
    if(this.cardItems.find(el=>el.ProductID==ShoppingCardItems.ProductID)==undefined)

    {
      this.cardItems.push(ShoppingCardItems);

    }
    else{
      alert("This Product already added to card");
    }
       

  }
    
  
  RemoveFromCard(id:number)
  {
    let RemovedProduct=this.cardItems.find(el=>el.ProductID==id)
    const index=this.cardItems.indexOf(RemovedProduct!);
    this.cardItems.splice(index,1);
  
  }

  ngAfterViewInit(): void {

  }

  Buy()
  { for (let index = 0; index < this.cardItems.length; index++) {
    this.productServices.getProductByID(this.cardItems[index].ProductID).subscribe(
      productShosen=>
      { this.ProductShosen!=productShosen
        this.ProductShosen!.quantity=
        this.ProductShosen!.quantity - this.cardItems[index].SelectedQuantity;
       this.TotlalPriceOfAllSelectedProduct +=this.cardItems[index].TotalPrice;
      }

    )
    //  this.productServices.GetAllProducts().subscribe(ProductList=>{
    //   let ProductShosen=ProductList.find(product=>product.id==this.cardItems[index].ProductID)
     
    // })
   
    
  }
  this.TotlalPriceOfAllSelectedProduct= this.TotlalPriceOfAllSelectedProduct - (this.TotlalPriceOfAllSelectedProduct * .14);

  }

  ngOnDestroy(): void {
    for (let index = 0; index < this.AllSubscriptions.length; index++) {
             this.AllSubscriptions[index].unsubscribe();    
    }
  }

}
