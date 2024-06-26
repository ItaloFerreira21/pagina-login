import { Component } from '@angular/core';
import { LoginLayoutComponent } from '../../components/login-layout/login-layout.component';
import { FormGroup,FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputPrimarioComponent } from '../../components/input-primario/input-primario.component';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';

interface LoginForm{
  email: FormControl,
  password: FormControl
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
  LoginLayoutComponent,
  ReactiveFormsModule,
  InputPrimarioComponent
  ],
  providers:[
    LoginService
  ],


  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup<LoginForm>; //a exclamação indica que sera declarado em algum momento


  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastService: ToastrService
  ){
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required, Validators.minLength(5)])
    })
  }
  submit(){
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: () => this.toastService.success("Login feito com sucesso!"),
      error: () => this.toastService.error("Erro inesperado! Tente novamente mais tarde")
    })
  }
  navigate(){
    this.router.navigate(["signup"])
  }
}
