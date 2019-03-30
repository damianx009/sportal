import { NgModule } from '@angular/core';
import {MatButtonModule, MatSidenavModule, MatListModule, MatFormFieldModule, MatInputModule, MatIconModule, MatToolbarModule, MatMenuModule} from '@angular/material';

@NgModule({
    imports: [MatButtonModule,    MatSidenavModule,
              MatListModule,      MatIconModule,
              MatFormFieldModule, MatInputModule,
              MatToolbarModule,   MatMenuModule],
    exports: [MatButtonModule,    MatSidenavModule,
              MatListModule,      MatIconModule,
              MatFormFieldModule, MatInputModule,
              MatToolbarModule,   MatMenuModule]
})
export class AngularMaterialModule {}
