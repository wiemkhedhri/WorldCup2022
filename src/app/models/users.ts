export class Users {

  nom : string ;
  prenom : string ;
  datenaissance :string ;
  genre : string ;
  email : string ;
  telephone : string ;
  password : string ;
  role:string;
  constructor ( nom : string , prenom:string , datenaissance:string , genre:string,email:string,telephone:string,password:string,role:string){
    this.nom =nom ;
    this.prenom =prenom ;
    this.datenaissance = datenaissance ;
    this.genre = genre ;
    this.email =email ;
    this.telephone = telephone ;
    this.password =password ;
this.role=role ;
  }
}
