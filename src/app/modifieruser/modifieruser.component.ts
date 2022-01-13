import { Users } from './../models/users';
import { UtilisateursService } from './../services/utilisateurs.service';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-modifieruser',
  templateUrl: './modifieruser.component.html',
  styleUrls: ['./modifieruser.component.css']
})
export class ModifierUserComponent implements OnInit {
uri="http://localhost:8484/WorldCup/user/adduser";

resultat: any;
 User: any ;
  constructor(private http: HttpClient,private utilisateursService :UtilisateursService,public dialogRef: MatDialogRef<ModifierUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,) { }
  verifier (f:NgForm)
  {
    let id = this.data.id ;
    let nom = f.value["nom"];
    let prenom =f.value["prenom"];
    let datenaissance =f.value["datenaissance"];
    let genre =f.value["genre"];
    let email =f.value["email"];
    let telephone =f.value["telephone"];
    let password =f.value["password"];
    let role = f.value['role'];


    let users  = new Users(nom  , prenom , datenaissance , genre,email,telephone,password,role) ;
    let x = {id:id, ...users} ;
    this.utilisateursService.updateuser(x).subscribe(
      ()=>
      {
        this.dialogRef.close();
      },
      error => {

        console.log(error);
    }

      )

  }

  ngOnInit(): void {
    console.log(this.data);
  }

}
