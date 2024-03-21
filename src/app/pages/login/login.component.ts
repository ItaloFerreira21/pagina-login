import { Component } from '@angular/core';
import { LoginLayoutComponent } from '../../components/login-layout/login-layout.component';
import { FormGroup,FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    LoginLayoutComponent, ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup; //a exclamação indica que sera declarado em algum momento

  constructor(){
    this.loginForm = new FormGroup({
      username: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required, Validators.minLength(6)]) //minimo de 6 caracters na senha
    })
  }
}
