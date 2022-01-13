import { UpdateteamComponent } from './updateteam/updateteam.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LoginComponent } from './login/login.component';
import { ProfilComponent } from './profil/profil.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AfflisteuserComponent } from './afflisteuser/afflisteuser.component';
import { ListestadeComponent } from './listestade/listestade.component';
import { AddstadeComponent } from './addstade/addstade.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ModifierUserComponent } from './modifieruser/modifieruser.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateStadeComponent } from './updatestade/updatestade.component';
import { AddteamComponent } from './addteam/addteam.component';
import { ListeteamComponent } from './listeteam/listeteam.component';
import { Worldcup2022Component } from './worldcup2022/worldcup2022.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AcceuilComponent,
    AuthentificationComponent,
    InscriptionComponent,
    LoginComponent,
    ProfilComponent,
    AfflisteuserComponent,
    ListestadeComponent,
    AddstadeComponent,
    ModifierUserComponent ,
    UpdateStadeComponent,
    AddteamComponent,
    ListeteamComponent ,
    UpdateteamComponent,
    Worldcup2022Component

  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    HttpClientModule ,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule ,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
