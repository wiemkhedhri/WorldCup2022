import { Users } from './../models/users';
import { UtilisateursService } from './../services/utilisateurs.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
uri="http://localhost:8484/WorldCup/user/adduser";
msgErreur:any ;
resultat: any;
 User: any ;
  constructor(private http: HttpClient,private utilisateursService :UtilisateursService) { }
  verifier (f:NgForm)
  {
    let nom = f.value["nom"];
    let prenom =f.value["prenom"];
    let datenaissance =f.value["datenaissance"];
    let genre =f.value["genre"];
    let email =f.value["email"];
    let telephone =f.value["telephone"];
    let password =f.value["password"];
    let role =f.value["role"];
    if ( nom == "" || prenom == "" || datenaissance == "" || genre == ""|| email == "" || telephone == "" ||  password== "" )
    {
    alert("Merci de remplir tous les champs");
    }
    else{
      this.msgErreur =null;
    }
    let users = new Users(nom  , prenom , datenaissance , genre,email,telephone,password,role) ;

    this.utilisateursService.persist(users).subscribe(
      (Users)=>
      {this.User =[Users, this.User] ;

      },
      error => {

        console.log(error);
    }
      )
      alert("user ajouter avec succes") ;

  }

  ngOnInit(): void {
  }

}
