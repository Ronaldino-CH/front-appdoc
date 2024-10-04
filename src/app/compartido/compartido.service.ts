import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Sesion } from '../usuario/interfaces/sesion';

@Injectable({
  providedIn: 'root'
})
export class CompartidoService {

  constructor(private _snackBar: MatSnackBar) { }

  //metodo
  mostrarAlerta(mensaje: string, tipo: string){
    this._snackBar.open(mensaje, tipo, {
      horizontalPosition: "end",
      verticalPosition: "top",
      duration: 3000
    })
  }

  //metodo
  guardarSesion(sesion: Sesion){
    localStorage.setItem("usuarioSesion",JSON.stringify(sesion));
  }

  //metodo
  obtenerSesion(){
    const sesionString = localStorage.getItem("usuarioSesion");
    const usuarioToken = JSON.parse(sesionString!);
    return usuarioToken;
  }

  //metodo
  eliminarSesion(){
    localStorage.removeItem("usuarioSesion");
  }
}
