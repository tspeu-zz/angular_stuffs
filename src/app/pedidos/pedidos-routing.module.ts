import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PedidosFormComponent } from './formPedidos/pedidos.component';

const routes: Routes = [
  { path: '', component: PedidosFormComponent },


];
/*  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  } */

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidosRoutingModule { }
