import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalhes-vagas',
  templateUrl: './detalhes-vagas.component.html',
  styleUrls: ['./detalhes-vagas.component.css']
})
export class DetalhesVagasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  voltarVagasUsuario(){
    this.router.navigate(['usuario/vagas-usuario']);
  }

}
