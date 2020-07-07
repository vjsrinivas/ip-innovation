import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class MongoFunctionsService {

  constructor(private http: HttpClient) {}


  /* Event Functions */
  public addEvent(event, mode='add') {
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Mode': mode,
      })
    }

    console.log('Adding event...');
    return this.http.post('http://localhost:8080/api/SaveEvent', event, httpOptions);
  }

  public getEvents() {
    console.log('Getting events...');
    return this.http.get('http://localhost:8080/api/GetEvents');
  }

  public deleteEvent(doc_id) {
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Mode': 'delete',
      })
    };

    console.log('Deleting event...');
    return this.http.post('http://localhost:8080/api/DeleteEvent', {_id: doc_id}, httpOptions);
  }

  /* Users Functions */
  public getUsers() {
    console.log('Getting users...');
    return this.http.get('http://localhost:8080/api/GetUsers');
  }

  public deleteUser(doc_id) {
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Mode': 'delete',
      })
    };

    return this.http.post('http://localhost:8080/api/DeleteUser', {_id: doc_id});
  }

  public deleteUsers() {
    return this.http.post('http://localhost:8080/api/DeleteUser', {_id: 'all'});
  }

  // public setUsers() {
  //   // TODO:
  //   //update all user documents!
  // }

  public saveUser(userObject, mode='add') {
    // TODO:
    // only set one user document!
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Mode': mode,
      })
    };

    return this.http.post('http://localhost:8080/api/SetUser', userObject, httpOptions); 
  }

  public findUser(username:string) {
    return this.http.get('http://localhost:8080/api/GetUsers');
  }

  /* Sticker Functions */
  public deleteStickers() {
    return this.http.post('http://localhost:8080/api/DeleteStickers', {_id: 'all'});
  }

  public setSticker(stickerObj, mode='add') {
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Mode': mode,
      })
    }

    console.log('Adding event...');
    return this.http.post('http://localhost:8080/api/SetSticker', stickerObj, httpOptions);
  }
}
