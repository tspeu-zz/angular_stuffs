import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'pedidos',
    loadChildren: './pedidos/pedidos.module#PedidosModule'
  },
  {
    path: '', redirectTo: '/pedidos', pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



/*
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'details',
    component: DetailsComponent
    //loadChildren: './pages/details/detail-routing.module#DetailsModule'
  },
  {
    path: 'user-detail',
    loadChildren: './pages/user-detail/user-detail.module#UserDetailPageModule'
  }


*/

