import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-top-20',
  templateUrl: './top-20.component.html',
  styleUrls: ['./top-20.component.css']
})
export class Top20Component implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  visualizarVaga(){
    this.router.navigate(['detalhes-vaga'], { relativeTo: this.route});
  }

}
