import { Users } from './../models/users';
import { map } from "rxjs/operators";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilisateursService {


  constructor(private http: HttpClient) {}
persist(users: any) {
  return this.http.post<Users>("http://localhost:8484/WorldCup/user/adduser",users) ;
}
public deleteUser(id:Number) {

 return this.http.delete<Users>("http://localhost:8484/WorldCup/user/delete"+"/"+id) ;
}
public updateuser(users: any){
  return this.http.put<any>("http://localhost:8484/WorldCup/user/modif",users) ;
}


loginuser(user:any){
  return this.http.post<any>("http://localhost:8484/WorldCup/user/loginn",user) ;
}

}
