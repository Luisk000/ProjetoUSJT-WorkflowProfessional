import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { MatDialogModule } from '@angular/material/dialog';
import { NgBrazil } from 'ng-brazil';
import { TextMaskModule } from 'angular2-text-mask';
import { CustomFormsModule } from 'ng2-validation';
import { CurrencyMaskModule } from 'ng2-currency-mask';

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
    AdminRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    NgBrazil,
    TextMaskModule,
    CustomFormsModule,
    CurrencyMaskModule
  ],  
  providers: []
})
export class AdminModule { }
