import { Stade } from './../models/stade';
import { StadeService } from './../services/stade.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Users } from '../models/users';

@Component({
  selector: 'app-addstade',
  templateUrl: './addstade.component.html',
  styleUrls: ['./addstade.component.css']
})
export class AddstadeComponent implements OnInit {
  public currentUser: Users | undefined;
  public currentUserItem: string | null = localStorage.getItem('currentUser');
resultat: any;
Stade:any ;
uri="http://localhost:8484/WorldCup/stade/addstade";
  constructor(private http:HttpClient,private stadeservice :StadeService,    private router: Router) {
    this.currentUser = this.currentUserItem !== null ? JSON.parse(this.currentUserItem) : null;
  }
    verifier(f:NgForm){
let nom = f.value["nom"];
let capacite = f.value["capacite"];
let description = f.value["description"] ;
let stade = new Stade(nom , capacite ,description);
this.stadeservice.persist(stade).subscribe(
  (stade)=>
  {this.Stade=[stade, this.Stade] ;}
)
alert("stade ajouter avec succes")
    }


  ngOnInit(): void {
  }
  logout() {
    //remove user from localStorage
    localStorage.removeItem('currentUser');
    this.router.navigate(['']);
  }
}
