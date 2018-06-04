import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import 'rxjs/add/operator/map';
import { RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { UsersState } from './store/store';

// lets Angular know that a class can be used with the dependency injector
@Injectable()

// API's talking to the server
export class CrudService {
  constructor(private http: HttpClient) { }

  saveNewUser(user) {
    const url ='http://localhost:1983/save-user';
    return this.http.post(url, user, { responseType: 'json' } ).subscribe();
  }

  editUser(newUserInfo) {
    const url ='http://localhost:1983/update-user';
    return this.http.post(url, newUserInfo, { responseType: 'json' } ).subscribe();
  }
 

  saveNewPiece(piece) {
    const url ='http://localhost:1983/save-piece';
    return this.http.post(url, piece, { responseType: 'json' } ).subscribe();
  }
  
  deletePiece(idpieces) {
    // console.log("clicking delete piece");
    const url ='http://localhost:1983/delete-from-api/' + idpieces;
    return this.http.get(url);
  }

  displayAllUsers(): Observable<any> {
    return this.http.get('http://localhost:1983/user-api', { responseType: 'json' } );
  } 

    // Redux
    static getInitialPieceState(): UsersState {
      return {
        piece: []
      };
    }
    displayAllPieces(): Observable<any> {
      // console.log("this is reading the displayAllPieces in piecesServiceService");
      return this.http.get('http://localhost:1983/pieces-api', { responseType: 'json' } );
    } 

}


