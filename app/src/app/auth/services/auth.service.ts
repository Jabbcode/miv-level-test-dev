import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
    .pipe(
      map( response => console.log( response ) )
    )
  }

  login( email: string, password: string ): Observable<any> {
    return this.http.post(this.baseUrl + '/api/auth',{
      "email": email,
      "password": password
    })
    .pipe(
      map( response => console.log( response ) )
    )
  }
}
