import { ModifierUserComponent } from './../modifieruser/modifieruser.component';
import { MatDialog } from '@angular/material/dialog';
import { UtilisateursService } from './../services/utilisateurs.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { convertUpdateArguments } from '@angular/compiler/src/compiler_util/expression_converter';
import { Users } from '../models/users';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-afflisteuser',
  templateUrl: './afflisteuser.component.html',
  styleUrls: ['./afflisteuser.component.css'],
})
export class AfflisteuserComponent implements OnInit {
  private uri = 'http://localhost:8484/WorldCup/user/json';
  private urid = 'http://localhost:8484/WorldCup/user/delete';
  public users: any;
  public currentUser: Users | undefined;
  public currentUserItem: string | null = localStorage.getItem('currentUser');
  constructor(
    private http: HttpClient,
    public utilisateursService: UtilisateursService,
    public dialog: MatDialog ,    private router: Router
  ) {
    this.http.get(this.uri).subscribe((data) => {
      this.users = data;
    });

    this.currentUser = this.currentUserItem !== null ? JSON.parse(this.currentUserItem) : null;
  }

  OnDelete(id: Number) {
    if (confirm('are you sure to delete')) {
      this.utilisateursService.deleteUser(id).subscribe((data) => {
        this.users = data;
      });
    }
  }

  test(user: any) {
    const dialogRef = this.dialog.open(ModifierUserComponent, {
      width: '450px',
      height: '630px',
      data: user,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.http.get(this.uri).subscribe((data) => {
        this.users = data;
      });
      // console.log('The dialog was closed');
      //this.animal = result;
    });
  }
  logout() {
    //remove user from localStorage
    localStorage.removeItem('currentUser');
    this.router.navigate(['']);
  }
  ngOnInit(): void {}
}
