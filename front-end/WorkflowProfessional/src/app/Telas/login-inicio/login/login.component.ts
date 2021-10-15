import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { DisplayMessage, GenericValidator, ValidationMessages } from 'src/app/Validacao/generic-form-validator';
import { fromEvent, merge, Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginRegistro } from '../Model-Login/loginRegistro';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  public tipoUser: number;

  @ViewChildren(FormControlName, {read: ElementRef}) forInputElements: ElementRef[];
  
  loginForm: FormGroup;

  public loginRegistro: LoginRegistro;  
  validationMessages: ValidationMessages;
  genericValidator: GenericValidator;
  displayMessage: DisplayMessage = {};  

  constructor(private fb: FormBuilder,    
    private router: Router,
    private route: ActivatedRoute
    ) {    

    this.validationMessages = {
      email: {
        required: 'Informe o e-mail',
        email: 'Email inválido'
      },
      senha: {
        required: 'Informe a senha',
        rangeLength: 'A senha deve possuir entre 6 e 15 caracteres'
      }
    };
    this.genericValidator = new GenericValidator(this.validationMessages);    
  }

  ngOnInit(): void {   

    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      senha: ['', [Validators.required, CustomValidators.rangeLength([6, 15])]]      
    });

    this.route.params
    .subscribe(params => {      
      this.tipoUser = params['id'];
    });
  }

  ngAfterViewInit(): void {
    let controlBlurs: Observable<any>[] = this.forInputElements
    .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.processarMensagens(this.loginForm);
    });
  }

  login() {
    if (this.loginForm.dirty && this.loginForm.valid) {
      this.loginRegistro = Object.assign({}, this.loginRegistro, this.loginForm.value);
      this.irDashboard();      
    }

    console.log(this.loginRegistro);
  }

  irDashboard(){
    if (this.tipoUser == 1) this.administrador();
    else this.usuario();
  }

  administrador(){
    this.router.navigate(['admin/home']);
  }

  usuario(){
    this.router.navigate(['usuario/home']);
  }

  registrar(){
    this.router.navigate([`registro/${this.tipoUser}`]);
  }

  voltarSelecao(){
    this.router.navigate(['/']);
  }

}
