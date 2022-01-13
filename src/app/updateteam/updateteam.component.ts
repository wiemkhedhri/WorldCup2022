import { Equipe } from './../models/equipe';
import { EquipeService } from './../services/equipe.service';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-updateteam',
  templateUrl: './updateteam.component.html',
  styleUrls: ['./updateteam.component.css']
})
export class UpdateteamComponent implements OnInit {
Equipes:any ;
  constructor(private htoo:HttpClient,private equipeService:EquipeService,  @Inject(MAT_DIALOG_DATA) public data:any, public dialogRef: MatDialogRef<UpdateteamComponent>,) { }
  verifier(f:NgForm){
    let id = this.data.id ;
    let nom = f.value["nom"];
    let coupes = f.value["coupes"];
    let points = f.value["points"] ;
    let continent = f.value['continent']
    let equipe = new Equipe(nom , coupes ,points,continent);
    let x = {id:id, ...equipe} ;

    this.equipeService.updateteam(x).subscribe(
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
