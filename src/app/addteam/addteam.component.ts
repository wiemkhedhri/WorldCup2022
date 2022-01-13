import { Equipe } from './../models/equipe';
import { EquipeService } from './../services/equipe.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-addteam',
  templateUrl: './addteam.component.html',
  styleUrls: ['./addteam.component.css']
})
export class AddteamComponent implements OnInit {
Equipes:any ;
  constructor(private htoo:HttpClient,private equipeService:EquipeService,private router: Router) { }
  verifier(f:NgForm){
    let nom = f.value["nom"];
    let coupes = f.value["coupe"];
    let points = f.value["points"] ;
    let continent = f.value['continent']
    let equipe = new Equipe(nom , coupes ,points,continent);
    this.equipeService.Persist(equipe).subscribe(
      (equipe)=>{this.Equipes=[equipe,this.Equipes] ;}
    )

    alert("equipe ajouter avec succes")
        }
  ngOnInit(): void {
  }
  logout() {
    //remove user from localStorage
    localStorage.removeItem('currentUser');
    this.router.navigate(['']);
  }

}
