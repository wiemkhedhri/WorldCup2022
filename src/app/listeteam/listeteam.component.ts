import { UpdateteamComponent } from './../updateteam/updateteam.component';
import { EquipeService } from './../services/equipe.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Users } from '../models/users';
@Component({
  selector: 'app-listeteam',
  templateUrl: './listeteam.component.html',
  styleUrls: ['./listeteam.component.css'],
})
export class ListeteamComponent implements OnInit {
  equipes: any;
  public currentUser: Users | undefined;
  public currentUserItem: string | null = localStorage.getItem('currentUser');
  constructor(
    private http: HttpClient,
    private equipeService: EquipeService,
    public dialog: MatDialog,
    private router: Router
  ) {
    this.http
      .get('http://localhost:8484/WorldCup/equipe/json')
      .subscribe((data) => {
        this.equipes = data;
      });
    this.currentUser =
      this.currentUserItem !== null ? JSON.parse(this.currentUserItem) : null;
  }
  OnDelete(id: Number) {
    if (confirm('are you sure to delete')) {
      this.equipeService.deleteequipe(id).subscribe((data) => {
        this.equipes = data;
      });
    }
  }
  test(team: any) {
    const dialogRef = this.dialog.open(UpdateteamComponent, {
      width: '450px',
      height: '630px',
      data: team,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.http
        .get('http://localhost:8484/WorldCup/equipe/json')
        .subscribe((data) => {
          this.equipes = data;
        });
      // console.log('The dialog was closed');
      //this.animal = result;
    });
  }

  ngOnInit(): void {}
  logout() {
    //remove user from localStorage
    localStorage.removeItem('currentUser');
    this.router.navigate(['']);
  }
}
