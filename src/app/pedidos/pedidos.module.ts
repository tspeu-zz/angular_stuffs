import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidosRoutingModule } from './pedidos-routing.module';
import { PedidosFormComponent } from './formPedidos/pedidos.component';



@NgModule({
  declarations: [PedidosFormComponent],
  imports: [
    CommonModule,
    PedidosRoutingModule
  ]
})
export class PedidosModule { }
