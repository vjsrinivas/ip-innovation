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

  public getUsers() {
    console.log('Getting users...');
    return this.http.get('http://localhost:8080/api/GetUsers');
  }

  public setUsers() {
    // TODO:
    //update all user documents!
  }

  public setUser(username:string) {
    // TODO:
    // only set one user document!
    return null; 
  }

  public findUser(username:string) {
    return null;
  }
}
