import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { DisplayMessage, GenericValidator, ValidationMessages } from 'src/app/Validacao/generic-form-validator';
import { fromEvent, merge, Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { VagaAdmin } from '../../model-admin/vaga-admin';

@Component({
  selector: 'app-cadastrar-vaga-admin',
  templateUrl: './cadastrar-vaga-admin.component.html',
  styleUrls: ['./cadastrar-vaga-admin.component.css']
})
export class CadastrarVagaAdminComponent implements OnInit, AfterViewInit {

  @ViewChildren(FormControlName, {read: ElementRef}) forInputElements: ElementRef[];

  cadastroVagaForm: FormGroup;
  
  public admin: VagaAdmin;
  validationMessages: ValidationMessages;
  genericValidator: GenericValidator;
  displayMessage: DisplayMessage = {};

  constructor(private fb: FormBuilder, 
    private dialog: MatDialog,
    private router: Router) {
      
    this.validationMessages = {
      funcao: {
        required: 'A função é requerida',
        minlength: 'A função precisa ter no mínimo 2 caracteres',
        maxlength: 'A função precisa ter no máximo 150 caracteres'
      },
      descricao: {
        required: 'A descrição é requerida',
        minlength: 'A descrição precisa ter no mínimo 2 caracteres',
        maxlength: 'A descrição precisa ter no máximo 150 caracteres'
      },
      horario: {
        required: 'O horário é requerido',
        minlength: 'O horário precisa ter no mínimo 8 caracteres',
        maxlength: 'O horário precisa ter no máximo 150 caracteres'
      },
      salario: {
        required: 'O salário é requerido',
        moeda: 'Valor inválido',
        min: 'O valor deve ser no mínimo R$ 1.000,00',
        max: 'O valor deve ser no máximo R$ 20.000,00'
      },      
      beneficios: {
        required: 'O benefício é requerido',
        minlength: 'O benefício precisa ter no mínimo 10 caracteres',
        maxlength: 'O benefício precisa ter no máximo 300 caracteres'
      }
    };
    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit() {
    this.cadastroVagaForm = this.fb.group({
      funcao: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
      descricao: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
      horario: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(150)]],
      salario: ['', [Validators.required, Validators.min(1000), Validators.max(20000)]],
      beneficios: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(300)]],      
    });
  }

  ngAfterViewInit(): void {
    let controlBlurs: Observable<any>[] = this.forInputElements
    .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.processarMensagens(this.cadastroVagaForm);
    });
  }

  adicionarVaga(){

    if(this.cadastroVagaForm.dirty && this.cadastroVagaForm.valid){
      this.admin = Object.assign({}, this.admin, this.cadastroVagaForm.value);
    }

    console.log(this.admin);
  }

  voltarDashboard(){
    this.router.navigate(['admin/vagas']);
  }

}
