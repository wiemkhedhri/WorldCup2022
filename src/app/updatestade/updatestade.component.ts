import { Stade } from './../models/stade';
import { StadeService } from './../services/stade.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit , Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-addstade',
  templateUrl: './updatestade.component.html',
  styleUrls: ['./updatestade.component.css']
})
export class UpdateStadeComponent implements OnInit {

resultat: any;
Stade:any ;
uri="http://localhost:8484/WorldCup/stade/addstade";
  constructor(private http:HttpClient,private stadeservice :StadeService,public dialogRef: MatDialogRef<UpdateStadeComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,) {}
    verifier(f:NgForm){
      let id = this.data.id;
let nom = f.value["nom"];
let capacite = f.value["capacite"];
let description = f.value["description"] ;

let stade = new Stade(nom , capacite ,description);
let x = {id:id, ...stade} ;
this.stadeservice.updatestade(x).subscribe(
  ()=>
  {  this.dialogRef.close();}
)

    }


  ngOnInit(): void {
    console.log(this.data);
  }

}
