import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Telas/home/home.component';

const routes: Routes = [

  { path: '', component: HomeComponent},
  
  { path: 'admin', loadChildren: () => import('./Telas/admin/admin-module').then(m => m.AdminModule) },

  { path: 'usuario', loadChildren: () => import('./Telas/usuario/usuario-module').then(m => m.UsuarioModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
