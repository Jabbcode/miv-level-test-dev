import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  @ViewChild('formularioLogin') formularioLogin!: NgForm;

  initForm = {
    email: '',
    password: ''
  }

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  login() {


    if( this.formularioLogin?.controls.email?.value === '' ) {
      console.log('Debe ingresar un email')
      return;
    }


    if( this.formularioLogin?.controls.password?.value === '' ) {
      console.log('Debe ingresar un password')
      return;
    }

    const { email, password } = this.formularioLogin.value

    this.authService.login(email, password)
      .subscribe( response => {
        localStorage.setItem('token', response.token)
        this.router.navigate(['/store']);
      })
  }



}
