import { NgModule } from '@angular/core';
import {MatButtonModule, MatSidenavModule, MatListModule, MatFormFieldModule, MatInputModule, MatIconModule, MatToolbarModule, MatMenuModule, MatSnackBarModule, MatCheckboxModule, MatDividerModule, MatExpansionModule, MatGridListModule, MatSlideToggleModule, MatCardModule} from '@angular/material';

@NgModule({
    imports: [MatButtonModule,    MatSidenavModule,
              MatListModule,      MatIconModule,
              MatFormFieldModule, MatInputModule,
              MatToolbarModule,   MatMenuModule,
              MatSnackBarModule,  MatCheckboxModule,
              MatDividerModule,   MatExpansionModule,
              MatGridListModule,  MatSlideToggleModule,
              MatCardModule],
    exports: [MatButtonModule,    MatSidenavModule,
              MatListModule,      MatIconModule,
              MatFormFieldModule, MatInputModule,
              MatToolbarModule,   MatMenuModule,
              MatSnackBarModule,  MatCheckboxModule,
              MatDividerModule,   MatExpansionModule,
              MatGridListModule,  MatSlideToggleModule,
              MatCardModule]
})
export class AngularMaterialModule {}
