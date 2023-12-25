import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = 'http://localhost:3000/users'
  constructor(private http: HttpClient) { }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }
  getUserData(id: string): Observable<User> {
    return this.http.get<User>(`${this.url}/${id}`);
  }
  postUsers(data: User) {
    return this.http.post(this.url, data)
  }
  updateUser(data: User) {
    return this.http.patch(`${this.url}/${data.id}`, data)
  }
  deleteUsers(id: number) {
    return this.http.delete(`${this.url}/${id}`)
  }
}
