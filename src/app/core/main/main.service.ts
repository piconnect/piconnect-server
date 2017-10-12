import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// interface Response {
//   response: string;
// }

@Injectable()
export class MainService {

  constructor( private http: HttpClient ) { }

}
