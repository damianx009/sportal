import { NgModule } from '@angular/core';
import {MatButtonModule, MatSidenavModule, MatListModule, MatFormFieldModule, MatInputModule, MatIconModule, MatToolbarModule, MatMenuModule, MatSnackBarModule, MatCheckboxModule, MatDividerModule} from '@angular/material';

@NgModule({
    imports: [MatButtonModule,    MatSidenavModule,
              MatListModule,      MatIconModule,
              MatFormFieldModule, MatInputModule,
              MatToolbarModule,   MatMenuModule,
              MatSnackBarModule,  MatCheckboxModule,
              MatDividerModule],
    exports: [MatButtonModule,    MatSidenavModule,
              MatListModule,      MatIconModule,
              MatFormFieldModule, MatInputModule,
              MatToolbarModule,   MatMenuModule,
              MatSnackBarModule,  MatCheckboxModule,
              MatDividerModule]
})
export class AngularMaterialModule {}
