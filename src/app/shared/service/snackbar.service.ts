import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _matSnack : MatSnackBar) { }


openSnackBar(msg : string){
  this._matSnack.open('simthing is changed',"close",{
    duration : 2500,
    verticalPosition : 'top',
    horizontalPosition : 'left' 
  })
}
}
