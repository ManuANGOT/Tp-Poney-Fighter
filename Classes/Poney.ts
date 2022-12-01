import Couleurs from "../Interfaces/Couleurs";

export default abstract class Poney {
  private _nom: string;
  private _dateDeNaissance: Date;
  private _pvMax: number;
  private _pv: number;
  private _niveau:number;
  private _couleur : Couleurs;


  constructor(nom :string, dateDeNaissance : Date, pvMax : number, pv: number, niveau?:number, couleur:Couleurs) {
    this._nom= nom;
    this._dateDeNaissance=dateDeNaissance;
    this._pvMax=pvMax;
    this._pv=pv;
    this._niveau=niveau | 1;
    this._couleur= couleur;
  }
  public get nom(nouveauNom:string){

    if (nouveauNom.trim().length>0){
        this.nom = nouveauNom;
    }
    else {
        throw new error("Le nom doit contenir au moins un caractère");
        
    }
  }

  public get dateDeNaissance():Date{
    return this._dateDeNaissance;
  }

  public set dateDeNaissance
}
