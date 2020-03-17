import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonResponse } from '../model/json-response.class';
import { User } from '../model/user.class';

const url: string = "http://localhost:8080/users/"

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private htpp: HttpClient) {}

  list(): Observable<JsonResponse>{
    return this.htpp.get(url) as Observable<JsonResponse>;
  }

  create(user: User): Observable<JsonResponse>{
    return this.htpp.post(url, user) as Observable<JsonResponse>;
  }

  get(id: number): Observable<JsonResponse>{
    return this.htpp.get(url+id) as Observable<JsonResponse>;
  }

  edit(user: User): Observable<JsonResponse>{
    return this.htpp.put(url, user) as Observable<JsonResponse>;
  }

  delete(id: number): Observable<JsonResponse>{
    return this.htpp.delete(url+id) as Observable<JsonResponse>;
  }

  //user is passed into the body of url request
  login(user:User): Observable<JsonResponse>{
    return this.htpp.post(url+'login', user) as Observable<JsonResponse>;
  }

}
