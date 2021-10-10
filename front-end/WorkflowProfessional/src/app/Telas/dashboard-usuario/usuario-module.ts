import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioRoutingModule } from './usuario-route';
import { UsuarioComponent } from './usuario.component';
import { DashboardUsuarioComponent } from './dashboard-usuario/dashboard-usuario.component';
import { AreasMaisComponent } from './dashboard-usuario/areas-mais/areas-mais.component';
import { Top20Component } from './dashboard-usuario/top-20/top-20.component';
import { DetalhesVagasComponent } from './dashboard-usuario/detalhes-vagas/detalhes-vagas.component';
import { VagasUsuarioComponent } from './dashboard-usuario/vagas-usuario/vagas-usuario.component';
import { CadastroUsuarioComponent } from './dashboard-usuario/cadastro-usuario/cadastro-usuario.component';

@NgModule({
  declarations: [
    UsuarioComponent,
    DashboardUsuarioComponent,
    AreasMaisComponent,
    CadastroUsuarioComponent,
    Top20Component,
    DetalhesVagasComponent,
    VagasUsuarioComponent
  ],
  imports: [
    CommonModule,    
    FormsModule,
    HttpClientModule,
    UsuarioRoutingModule    
  ],  
  providers: []
})
export class UsuarioModule { }