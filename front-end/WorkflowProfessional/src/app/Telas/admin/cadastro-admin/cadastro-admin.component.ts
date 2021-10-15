import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { DisplayMessage, GenericValidator, ValidationMessages } from 'src/app/Validacao/generic-form-validator';
import { fromEvent, merge, Observable } from 'rxjs';
import { Admin } from '../model-admin/admin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-admin',
  templateUrl: './cadastro-admin.component.html',
  styleUrls: ['./cadastro-admin.component.css']
})
export class CadastroAdminComponent implements OnInit, AfterViewInit {

  @ViewChildren(FormControlName, {read: ElementRef}) forInputElements: ElementRef[];

  cadastroForm: FormGroup;
  
  public admin: Admin;
  validationMessages: ValidationMessages;
  genericValidator: GenericValidator;
  displayMessage: DisplayMessage = {};

  constructor(private fb: FormBuilder, 
    private router: Router) {
      
    this.validationMessages = {
      nome: {
        required: 'O nome é requerido',
        minlength: 'O nome precisa ter no mínimo 2 caracteres',
        maxlength: 'O nome precisa ter no máximo 150 caracteres'
      },
      empresa: {
        required: 'A empresa é requerida',
        minlength: 'A empresa precisa ter no mínimo 2 caracteres',
        maxlength: 'A empresa precisa ter no máximo 150 caracteres'
      },
      cargo: {
        required: 'O cargo é requerido',
        minlength: 'O cargo precisa ter no mínimo 2 caracteres',
        maxlength: 'O cargo precisa ter no máximo 150 caracteres'
      }
    };
    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit() {
    this.cadastroForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
      empresa: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
      cargo: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]]
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
      this.admin = Object.assign({}, this.admin, this.cadastroForm.value);
    }

    console.log(this.admin);
  }

  voltarDashboard(){
    this.router.navigate(['admin/home']);
  }

}
