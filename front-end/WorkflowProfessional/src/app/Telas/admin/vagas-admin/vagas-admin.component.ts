import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vagas-admin',
  templateUrl: './vagas-admin.component.html',
  styleUrls: ['./vagas-admin.component.css']
})
export class VagasAdminComponent implements OnInit {

  public novaVaga = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  cadastrarVaga(){
    this.novaVaga = true;
  }

}
