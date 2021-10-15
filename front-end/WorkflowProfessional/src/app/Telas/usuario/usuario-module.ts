import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioRoutingModule } from './usuario-route';
import { UsuarioComponent } from './usuario.component';
import { DashboardUsuarioComponent } from './dashboard-usuario/dashboard-usuario.component';
import { AreasMaisComponent } from './areas-mais/areas-mais.component';
import { Top20Component } from './top-20/top-20.component';
import { DetalhesVagasComponent } from './detalhes-vagas/detalhes-vagas.component';
import { VagasUsuarioComponent } from './vagas-usuario/vagas-usuario.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { MenuUsuarioComponent } from './menu-usuario/menu-usuario.component';
import { RodapeUsuarioComponent } from './rodape-usuario/rodape-usuario.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NgBrazil } from 'ng-brazil';
import { TextMaskModule } from 'angular2-text-mask';
import { CustomFormsModule } from 'ng2-validation';
import { CurrencyMaskModule } from 'ng2-currency-mask';

@NgModule({
  declarations: [
    UsuarioComponent,
    DashboardUsuarioComponent,
    AreasMaisComponent,
    CadastroUsuarioComponent,
    Top20Component,
    DetalhesVagasComponent,
    VagasUsuarioComponent,
    MenuUsuarioComponent,
    RodapeUsuarioComponent
  ],
  imports: [
    CommonModule,    
    FormsModule,
    HttpClientModule,
    UsuarioRoutingModule,    
    RouterModule,
    NgbModule,
    CollapseModule.forRoot(),
    ReactiveFormsModule,
    NgBrazil,
    TextMaskModule,
    CustomFormsModule,
    CurrencyMaskModule
  ],  
  providers: []
})
export class UsuarioModule { }