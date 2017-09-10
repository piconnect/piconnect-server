import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserService {

  constructor( private http: Http ) { }

  registerUser( data ) {
    // return this.http.post('/api/register', data);
    console.log( data );
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
