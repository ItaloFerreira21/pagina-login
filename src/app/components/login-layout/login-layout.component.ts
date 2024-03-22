import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-login-layout',
  standalone: true,
  imports: [],
  templateUrl: './login-layout.component.html',
  styleUrl: './login-layout.component.scss'
})
export class LoginLayoutComponent {
  @Input() title: string = ""
  @Input() textoBtnPrimario: string = ""
  @Input() textoBtnSecundario: string = ""
  @Input() disableBtnPrimario: boolean = true;
  @Output("submit") onSubmit = new EventEmitter();
  @Output("navigate") onNavigate= new EventEmitter();
  submit(){   //função submit
    this.onSubmit.emit();
  }
  navigate(){  //função navigate
    this.onNavigate.emit();
  }
}
