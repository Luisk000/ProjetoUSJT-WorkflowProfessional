import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { UsuarioComponent } from './usuario.component';
import { DashboardUsuarioComponent } from './dashboard-usuario/dashboard-usuario.component';
import { AreasMaisComponent } from './dashboard-usuario/areas-mais/areas-mais.component';
import { CadastroUsuarioComponent } from './dashboard-usuario/cadastro-usuario/cadastro-usuario.component';
import { DetalhesVagasComponent } from './dashboard-usuario/detalhes-vagas/detalhes-vagas.component';
import { Top20Component } from './dashboard-usuario/top-20/top-20.component';
import { VagasUsuarioComponent } from './dashboard-usuario/vagas-usuario/vagas-usuario.component';

const usuarioRouterConfig: Routes = [
  {
    path: '', component: UsuarioComponent,
    children: [

      { path: '', component: DashboardUsuarioComponent },

      { path: 'areas-mais', component: AreasMaisComponent },

      { path: 'cadastro-usuario', component: CadastroUsuarioComponent },      

      { path: 'top-20', component: Top20Component,
        children: [
            { path: 'detalhes-vagas-top20', component: DetalhesVagasComponent },
        ] 
      },

      { path: 'vagas-usuario', component: VagasUsuarioComponent,
        children: [
            { path: 'detalhes-vagas-vaga', component: DetalhesVagasComponent },
        ]
      }    
    ]

  }
  
]

@NgModule({
  imports: [
    RouterModule.forChild(usuarioRouterConfig)
  ],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }