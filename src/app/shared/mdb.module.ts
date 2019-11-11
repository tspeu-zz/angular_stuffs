import {NgModule} from '@angular/core';
import { NavbarModule, WavesModule, ButtonsModule, MDBBootstrapModule } from 'angular-bootstrap-md';



@NgModule({
  imports:[
    MDBBootstrapModule.forRoot()

  ],
  exports: [
    NavbarModule, WavesModule, ButtonsModule, MDBBootstrapModule
  ]
})
export class AngularBootstrapModule {}
