import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CrudService {

  // result: any;
  constructor(private http: HttpClient) { }

  createPiece(name, price) {
    const uri = 'http://localhost:1982/create-piece-api';
    const obj = {
      name: name,
      price: price
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res =>
          console.log('Done'));
  }

  editPiece(id) {
    const uri = 'http://localhost:1982/edit-piece-api' + id;
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  updatePiece(name, price, id) {
    const uri = 'http://localhost:1982/update-piece-api' + id;

    const obj = {
      name: name,
      price: price
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res => console.log('Done'));
  }

  deletePiece(id) {
    const uri = 'http://localhost:1982/delete-piece-api' + id;

        return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }



}


