import { NgModule } from '@angular/core';
import {MatButtonModule, MatSidenavModule, MatListModule, MatFormFieldModule, MatInputModule, MatIconModule, MatToolbarModule, MatMenuModule, MatSnackBarModule} from '@angular/material';

@NgModule({
    imports: [MatButtonModule,    MatSidenavModule,
              MatListModule,      MatIconModule,
              MatFormFieldModule, MatInputModule,
              MatToolbarModule,   MatMenuModule,
              MatSnackBarModule],
    exports: [MatButtonModule,    MatSidenavModule,
              MatListModule,      MatIconModule,
              MatFormFieldModule, MatInputModule,
              MatToolbarModule,   MatMenuModule,
              MatSnackBarModule]
})
export class AngularMaterialModule {}
