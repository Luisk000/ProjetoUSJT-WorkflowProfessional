import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: 'admin', loadChildren: () => import('./Telas/dashboard-admin/admin-module').then(m => m.AdminModule) },

  { path: '', loadChildren: () => import('./Telas/dashboard-usuario/usuario-module').then(m => m.UsuarioModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
