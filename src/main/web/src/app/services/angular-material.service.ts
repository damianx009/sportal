import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AngularMaterialService {

  constructor(private snackBar: MatSnackBar) { }

  openSnackBar(message: string, duration = 2000) {
    let config: MatSnackBarConfig = new MatSnackBarConfig();
    config.verticalPosition = 'bottom';
    config.horizontalPosition = 'right';
    config.duration = duration;
    config.panelClass = 'snack-primary-theme';
    this.snackBar.open(message, 'X',config);
  }
}
