import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {
  @ViewChild('formularioRegistro') formularioRegistro!: NgForm;

  initForm = {
    username: '',
    email: '',
    password: ''
  }

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  register() {

    if( this.formularioRegistro?.controls.username?.value === '' ) {
      console.log('Debe ingresar un username')
      return;
    }

    if( this.formularioRegistro?.controls.email?.value === '' ) {
      console.log('Debe ingresar un email')
      return;
    }


    if( this.formularioRegistro?.controls.password?.value === '' ) {
      console.log('Debe ingresar un password')
      return;
    }

    const { username, email, password } = this.formularioRegistro.value

    this.authService.register(username, email, password)
      .subscribe( response => {
        localStorage.setItem('token', response.token)
        this.router.navigate(['/store']);
      })
  }

}
