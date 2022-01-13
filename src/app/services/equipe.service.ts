import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Equipe } from '../models/equipe';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  constructor(private http:HttpClient) {}
  Persist(equipe:any){
    return this.http.post<Equipe>("http://localhost:8484/WorldCup/equipe/addequipe",equipe) ;

   }
   public deleteequipe(id:Number){
     return this.http.delete<Equipe>("http://localhost:8484/WorldCup/equipe/delete"+"/"+id) ;
   }
   public updateteam(team:any) {
    return this.http.put<any>("http://localhost:8484/WorldCup/equipe/modifequipe",team) ;
  }
}
