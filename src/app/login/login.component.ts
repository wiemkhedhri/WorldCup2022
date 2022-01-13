import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Users } from '../models/users';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public currentUser: Users | undefined;
  public currentUserItem: string | null = localStorage.getItem('currentUser');
  constructor(private router: Router) {
    this.currentUser =
    this.currentUserItem !== null ? JSON.parse(this.currentUserItem) : null;
  }

  ngOnInit(): void {
  }
  logout() {
    //remove user from localStorage
    localStorage.removeItem('currentUser');
    this.router.navigate(['']);
  }


}
