import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild(HeaderComponent, null) search: HeaderComponent;

  title = 'tlmkPedidosApp';


  buscarPedido() {
    this.search.search();
  }
}
