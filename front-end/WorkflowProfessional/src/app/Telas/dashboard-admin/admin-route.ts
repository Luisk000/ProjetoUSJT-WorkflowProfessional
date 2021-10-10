import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { CadastroAdminComponent } from './dashboard-admin/cadastro-admin/cadastro-admin.component';
import { VagasAdminComponent } from './dashboard-admin/vagas-admin/vagas-admin.component';
import { CadastrarVagaAdminComponent } from './dashboard-admin/vagas-admin/cadastrar-vaga-admin/cadastrar-vaga-admin.component';
import { AdminComponent } from './admin.component';

const adminRouterConfig: Routes = [
  {
    path: '', component: AdminComponent,
    children: [

      { path: '', component: DashboardAdminComponent },

      { path: 'cadastro-admin', component: CadastroAdminComponent },

      { path: 'vagas-admin', component: VagasAdminComponent,

        children: [
            {path: 'cadastro', component: CadastrarVagaAdminComponent}
        ]
      }    
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(adminRouterConfig)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }