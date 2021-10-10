import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { RodapeComponent } from './rodape/rodape.component';

@NgModule({
  declarations: [
      RodapeComponent,
      MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule    
  ],
  exports: [
    RodapeComponent,    
    MenuComponent,    
  ]
})

export class NavegacaoModule {}
