import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-detalhes-vagas',
  templateUrl: './detalhes-vagas.component.html',
  styleUrls: ['./detalhes-vagas.component.css']
})
export class DetalhesVagasComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit() {
  }

  voltarVagasUsuario(){
    this._location.back();
  }

}
