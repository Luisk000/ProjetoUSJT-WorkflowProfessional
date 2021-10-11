import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { CadastroAdminComponent } from './cadastro-admin/cadastro-admin.component';
import { VagasAdminComponent } from './vagas-admin/vagas-admin.component';
import { CadastrarVagaAdminComponent } from './vagas-admin/cadastrar-vaga-admin/cadastrar-vaga-admin.component';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-route';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { RodapeAdminComponent } from './rodape-admin/rodape-admin.component';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardAdminComponent,
    CadastroAdminComponent,
    VagasAdminComponent,
    CadastrarVagaAdminComponent,
    MenuAdminComponent,
    RodapeAdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FormsModule,
    CollapseModule.forRoot(),  
    CommonModule,
    HttpClientModule,
    AdminRoutingModule    
  ],  
  providers: []
})
export class AdminModule { }
