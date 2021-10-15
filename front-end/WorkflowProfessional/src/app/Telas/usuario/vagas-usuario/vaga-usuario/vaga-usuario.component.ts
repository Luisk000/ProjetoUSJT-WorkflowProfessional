import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vaga-usuario',
  templateUrl: './vaga-usuario.component.html',
  styleUrls: ['./vaga-usuario.component.css']
})
export class VagaUsuarioComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  visualizarVaga(){
    this.router.navigate(['detalhes-vaga'], { relativeTo: this.route});
  }

}
