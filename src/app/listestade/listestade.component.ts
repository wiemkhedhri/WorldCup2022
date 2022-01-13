import { StadeService } from './../services/stade.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateStadeComponent } from '../updatestade/updatestade.component';
import { Users } from '../models/users';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listestade',
  templateUrl: './listestade.component.html',
  styleUrls: ['./listestade.component.css']
})
export class ListestadeComponent implements OnInit {
  stades: any ;
  public currentUser: Users | undefined;
  public currentUserItem: string | null = localStorage.getItem('currentUser');
  private uri="http://localhost:8484/WorldCup/stade/json";
  constructor(private http:HttpClient,private stadeService:StadeService,public dialog: MatDialog,private router:Router) {
    this.http.get(this.uri).subscribe((data)=>{this.stades=data}) ;
    this.currentUser = this.currentUserItem !== null ? JSON.parse(this.currentUserItem) : null;
   }
   OnDelete(id:Number) {
    if (confirm('are you sure to delete')){
      this.stadeService.deletestade(id).subscribe((data)=>{this.stades=data})   ;
    }
    }
    test(stade:any){
      const dialogRef = this.dialog.open(UpdateStadeComponent, {
        width: '450px', height:'630px',
         data: stade
       });

       dialogRef.afterClosed().subscribe(result => {
         this.http.get(this.uri).subscribe((data)=>{this.stades=data}) ;
        // console.log('The dialog was closed');
         //this.animal = result;
       });

    }
  ngOnInit(): void {
  }
  logout() {
    //remove user from localStorage
    localStorage.removeItem('currentUser');
    this.router.navigate(['']);
  }
}
