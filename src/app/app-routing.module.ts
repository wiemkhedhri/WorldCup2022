import { Worldcup2022Component } from './worldcup2022/worldcup2022.component';
import { ListeteamComponent } from './listeteam/listeteam.component';
import { AddteamComponent } from './addteam/addteam.component';
import { ProfilComponent } from './profil/profil.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AfflisteuserComponent } from './afflisteuser/afflisteuser.component';
import { ListestadeComponent } from './listestade/listestade.component';
import { AddstadeComponent } from './addstade/addstade.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'acceuil', component:AcceuilComponent },
  { path: '', component:AuthentificationComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'login', component:LoginComponent },
  { path: 'profil', component: ProfilComponent},
  { path: 'afflisteuser', component: AfflisteuserComponent},
  { path: 'listestade', component: ListestadeComponent},
  { path: 'addstade', component: AddstadeComponent},
  { path: 'addteam', component: AddteamComponent},
  { path: 'listeteam', component: ListeteamComponent},
  { path: 'worldcup2022', component: Worldcup2022Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
