import { Users } from './../models/users';
import { UtilisateursService } from './../services/utilisateurs.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormControl,
  FormGroup,
  NgForm,
  EmailValidator,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css'],
})
export class AuthentificationComponent implements OnInit {
  data: any;
  loginForm: FormGroup;

  constructor(
    private utilisateursService: UtilisateursService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  get f() {
    return this.loginForm.controls;
  }
  login() {
    let x = { email: this.f.email.value, password: this.f.password.value };
    this.utilisateursService.loginuser(x).subscribe(
      (user) => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.router.navigate(['../acceuil']);
        console.log('succes');
      },
      (error) => {
        alert('vérifiez vos donées');
      }
    );
  }
}
