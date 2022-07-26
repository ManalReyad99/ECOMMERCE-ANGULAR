import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../ViewModel/iproduct';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class APIProductsService {
  constructor(private httpClient:HttpClient)
   { 

    

   }

   GetAllProducts():Observable<IProduct[]>
   {
     return this.httpClient.get<IProduct[]>(`${environment.BaseAPIURL}/products`)
     

   }
   getProductByID(prdID: number)
{
  return this.GetAllProducts().pipe(map((products:IProduct[])=>products.find(prd=>prd.id==prdID)))
}
   
   getPrdIDsList()
   {

    return this.GetAllProducts().pipe(map((products:IProduct[])=>products.map(product=>product.id)))
     
   }
  
   GetAllProductByID(ProductId:number):Observable<IProduct>
   {

    return this.httpClient.get<IProduct>(`${environment.BaseAPIURL}/products/id=${ProductId}`)

   }

   GetAllProductsByCatID(CategoryID:number):Observable<IProduct[]>
   {
    return this.httpClient.get<IProduct[]>(`${environment.BaseAPIURL}/products?categoryid=${CategoryID}`);

    
   }

   AddNewProduct(newProduct:IProduct):Observable<IProduct>
   {

    return this.httpClient.post<IProduct>(`${environment.BaseAPIURL}/products`,JSON.stringify(newProduct));

   }
   EditProduct(ProductId:number, newProduct:IProduct):Observable<IProduct>
   {
    return this.httpClient.put<IProduct>(`${environment.BaseAPIURL}/products?id=${ProductId}`,JSON.stringify(newProduct));

   }
   UbdateProduct(ProductId:number, newProduct:IProduct):Observable<IProduct>
   {
    return this.httpClient.put<IProduct>(`${environment.BaseAPIURL}/products?id=${ProductId}`,JSON.stringify(newProduct));

   }

   DeleteProduct(ProductId:number)
   {
return this.httpClient.delete(`${environment.BaseAPIURL}/products?id=${ProductId}`);
    
   }
}
