import { AuthService } from './../../services/auth.service';

import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm:FormGroup;
  loading:boolean = false

  error_msg = ''

  constructor(
    private fb: FormBuilder, 
    private _authService: AuthService
    ) {
      this.loginForm = this.createForm(fb)
    }

  ngOnInit(): void {}

  createForm(formB: FormBuilder){
    return this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(6)]],
    }
    );
  }

  onSubmit(){

    let userCredentials = new User();

    userCredentials.email = this.loginForm?.get('email')?.value;
    userCredentials.password = this.loginForm?.get('password')?.value;

    this.loading = true
    this._authService.login(userCredentials).subscribe({
      next: (resp:any ) => { console.log('RESP ', resp)},
      error: (e:any) => { 
        this.loading = false
        if(e == 'NO AUTORIZADO'){
          this.error_msg = 'Los datos ingresados no son correctos'
        }else{
          this.error_msg = 'Error al intentar iniciar sesion'
        }
      } 
    });
  }

}
