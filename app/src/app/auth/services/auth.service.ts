import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { of, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient) { }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(this.baseUrl + '/api/auth/new',{
      "username": username,
      "email": email,
      "password": password
    })
  }

  login( email: string, password: string ): Observable<any> {
    return this.http.post(this.baseUrl + '/api/auth',{
      "email": email,
      "password": password
    })
  }

  verificarAutenticacion(token: any): any {
    
    if( !localStorage.getItem('token') ) {
      return of(false);
    }

    return this.http.get(this.baseUrl + '/api/auth/renew', {
      headers: new HttpHeaders({ 'x-token': token })
    })

  }
}
