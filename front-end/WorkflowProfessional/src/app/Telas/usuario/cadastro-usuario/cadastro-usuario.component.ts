import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CustomValidators } from 'ng2-validation';
import { Observable, fromEvent, merge } from 'rxjs';
import { ValidationMessages, GenericValidator, DisplayMessage } from 'src/app/Validacao/generic-form-validator';
import { Usuario } from '../model-usuario/usuario';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  @ViewChildren(FormControlName, {read: ElementRef}) forInputElements: ElementRef[];

  cadastroForm: FormGroup;
  
  public user: Usuario;
  validationMessages: ValidationMessages;
  genericValidator: GenericValidator;
  displayMessage: DisplayMessage = {};

  constructor(private fb: FormBuilder, 
    private dialog: MatDialog,
    private router: Router) {
      
    this.validationMessages = {
      nome: {
        required: 'O nome é requerido',
        minlength: 'O nome precisa ter no mínimo 2 caracteres',
        maxlength: 'O nome precisa ter no máximo 150 caracteres'
      },
      dataNasc: {
        required: 'A data de nascimento é requerida',
        date: 'Data de nascimento em formato inválido',
        minlength: 'Data de nascimento em formato inválido',
        maxlength: 'Data de nascimento em formato inválido'
      },
      profissao: {
        required: 'O profissao é requerido',
        minlength: 'O profissao precisa ter no mínimo 2 caracteres',
        maxlength: 'O profissao precisa ter no máximo 150 caracteres'
      },
      expProfissional: { },
      cursos: { }
    };
    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit() {

    let nascimento = new FormControl('', [Validators.required, Validators.minLength(10), 
      Validators.maxLength(10), CustomValidators.date]);

    this.cadastroForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
      dataNasc: nascimento,
      profissao: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
      expProfissional: ['', [Validators.maxLength(500)]],
      cursos: ['', [Validators.maxLength(300)]]
    });
  }

  ngAfterViewInit(): void {
    let controlBlurs: Observable<any>[] = this.forInputElements
    .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.processarMensagens(this.cadastroForm);
    });
  }

  adicionarAdministrador(){
    if(this.cadastroForm.dirty && this.cadastroForm.valid){
      this.user = Object.assign({}, this.user, this.cadastroForm.value);
    }

    console.log(this.user);
  }

  voltarDashboard(){
    this.router.navigate(['usuario/home']);
  }
}
