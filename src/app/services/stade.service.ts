import { Stade } from './../models/stade';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StadeService{

  constructor(private http:HttpClient) { }
  persist(stade:any){
return this.http.post<Stade>("http://localhost:8484/WorldCup/stade/addstade",stade) ;
  }
public deletestade(id:Number) {
  return this.http.delete<Stade>("http://localhost:8484/WorldCup/stade/delete"+"/"+id) ;
}
public updatestade(stade:any) {
  return this.http.put<any>("http://localhost:8484/WorldCup/stade/modifstade",stade) ;
}
}
