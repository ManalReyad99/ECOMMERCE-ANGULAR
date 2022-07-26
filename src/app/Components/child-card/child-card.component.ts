import { Component, Input, OnChanges, OnInit, SimpleChanges,Output, EventEmitter} from '@angular/core';
import { APIProductsService } from 'src/app/Services/apiproducts.service';
import { IProduct } from 'src/app/ViewModel/iproduct';
import { ICard } from '../CradViewModel/icard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child-card',
  templateUrl: './child-card.component.html',
  styleUrls: ['./child-card.component.scss']
})
export class ChildCardComponent implements OnInit, OnChanges {
@Input() receivedSelectedCatID:number=0;
@Output() onProductedSelected:EventEmitter<ICard> 
FilteredProducts:IProduct[]=[];
CardItems!:ICard ;

  constructor(private productService:APIProductsService,private router:Router) {

this.onProductedSelected=new EventEmitter<ICard>();
   
   }
  ngOnChanges(changes: SimpleChanges): void {
   
    this.productService.GetAllProductsByCatID(this.receivedSelectedCatID).subscribe(ProductList=>
      {
        if(this.receivedSelectedCatID==0)
        this.productService.GetAllProducts().subscribe(All=>
          {
            this.FilteredProducts=All;
          });
          else
          {
            this.FilteredProducts=ProductList
          }
      })
  
    
   }

  ngOnInit(): void {
  }
  addProductToCard(id:number,quantity:number)
  {
      this.productService.getProductByID(id).subscribe(selectedProduct=>
        {
          if(quantity<=selectedProduct!.quantity)
          {
     
           this.CardItems={
             ProductName:selectedProduct!.name,
             ProductID:selectedProduct!.id,
             SelectedQuantity:quantity,
             prouductPrice:selectedProduct!.price,
             TotalPrice:quantity*selectedProduct!.price,
             Image:selectedProduct!.image
     
           }
     
     this.onProductedSelected.emit(this.CardItems);
     
         }
          else{
            alert("the amount of this product in our store not enough");
          }
        })
    
     
  }

  prodectDetails(ProductId:number)
  {
    this.router.navigate(['/ParentCard',ProductId])
  }

}
