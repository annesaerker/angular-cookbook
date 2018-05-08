import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ChatService {
  
  constructor( private http: Http) { }

  getMessages() {
    // returns a promise
    return this.http.get('http://localhost:1982/messages').toPromise();
  }

  

}
