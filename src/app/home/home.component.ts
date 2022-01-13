import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Users } from '../models/users';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public currentUser: Users | undefined;
  public currentUserItem: string | null = localStorage.getItem('currentUser');
  constructor(private router :Router) {
    this.currentUser = this.currentUserItem !== null ? JSON.parse(this.currentUserItem) : null;
  }

  ngOnInit(): void {
  }
  logout() {
    //remove user from localStorage
    localStorage.removeItem('currentUser');
    this.router.navigate(['']);
  }
}
