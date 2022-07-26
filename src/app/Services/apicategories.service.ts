import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICategory } from '../ViewModel/icategory';

@Injectable({
  providedIn: 'root'
})

export class APICategoriesService {
  constructor(private httpClient:HttpClient) { }



GetAllCategories():Observable<ICategory[]>
{
  return this.httpClient.get<ICategory[]>(`${environment.BaseAPIURL}/categories`);
}







}
