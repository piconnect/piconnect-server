import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/Rx';

interface TokenResponse {
  token: string;
}

@Injectable()
export class UserService {

  constructor( private http: HttpClient ) { }

  registerUser( data ) {
    return this.http.post<TokenResponse>('/api/register', data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    });
  }

  loginUser ( data ) {
    return this.http.post<TokenResponse>('/api/login', data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    });
  }

  resetPassword( data ) {
    console.log( data );
  }

  forgetPassword( data ) {
    console.log( data );
  }
}
