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
    return this.http.post('/api/register', data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    });
  }

  loginUser ( data ) {
    console.log( data );
  }

  resetPassword( data ) {
    console.log( data );
  }

  forgetPassword( data ) {
    console.log( data );
  }
}
