import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vagas-admin',
  templateUrl: './vagas-admin.component.html',
  styleUrls: ['./vagas-admin.component.css']
})
export class VagasAdminComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  cadastrarVaga(){
    this.router.navigate(['vagas-cadastro'], { relativeTo: this.route});
  }

}
