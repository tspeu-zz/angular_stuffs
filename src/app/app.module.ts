import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//

// shared
import { MaterialModule } from './shared/material.module';
import { AngularBootstrapModule } from './shared/mdb.module';
import { NgSelectModule } from '@ng-select/ng-select';

// component
import { HeaderComponent } from './header/header.component';
import { SearchInputComponent } from './header/search-input/search-input.component';

// services
import { SearchPedidoService } from './services/search-pedido.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule, AngularBootstrapModule,
    NgSelectModule
  ],
  providers: [SearchPedidoService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
