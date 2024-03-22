// Aqui vamos colocar a logica para enviar os dados de login para o Backend, e pegar o retorno do backend e salvar o token na seção de usuario
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response.type';
import { __values } from 'tslib';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }
  login(email: string, password: string) {
    return this.httpClient.post<LoginResponse>('/login', { email, password }).pipe(
      tap((value) =>{
      sessionStorage.setItem("auth-token", value.token)
      sessionStorage.setItem("email", value.email)
    })
    )
  }
}
