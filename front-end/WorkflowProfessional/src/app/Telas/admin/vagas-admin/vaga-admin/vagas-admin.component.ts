import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vagas-admin',
  templateUrl: './vagas-admin.component.html',
  styleUrls: ['./vagas-admin.component.css']
})
export class VagasAdminComponent implements OnInit {

  @ViewChild('mdExcluir', { static: true })
  public mdExcluir: any;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  cadastrarVaga(){
    this.router.navigate(['vagas-cadastro'], { relativeTo: this.route});
  }

  editarVaga(){
    this.router.navigate(['vagas-editar/1'], { relativeTo: this.route});
  }

  excluirVaga(){}

  abrirExclusao(): void{
    this.mdExcluir.show();
  }

}
