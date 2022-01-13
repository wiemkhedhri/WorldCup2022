import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { Router, ActivatedRoute } from '@angular/router';
import { Users } from '../models/users';
@Component({
  selector: 'app-worldcup2022',
  templateUrl: './worldcup2022.component.html',
  styleUrls: ['./worldcup2022.component.css']
})
export class Worldcup2022Component implements OnInit {
  public currentUser: Users | undefined;
  public currentUserItem: string | null = localStorage.getItem('currentUser');
  constructor(private router: Router) {
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
