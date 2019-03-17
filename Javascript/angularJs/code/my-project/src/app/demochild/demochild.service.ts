import { Http } from '@angular/http';
import { Demochild } from './model/demochild';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'





@Injectable({
  providedIn: 'root'
})
export class DemochildService {
  public userListURL = "/api/users";
  constructor(public http: Http) { }

  public getUsers():Observable<Demochild[]> {
    return this.http.get(this.userListURL).map((res: Response) => res.json().data as Demochild[])
  }
}
