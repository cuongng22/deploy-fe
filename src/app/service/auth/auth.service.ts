import { Injectable } from '@angular/core';
import {BehaviorSubject, map, Observable} from "rxjs";
import {UserToken} from "../../model/user-token";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {User} from "../../model/user";
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<UserToken>;
  public currentUser: Observable<UserToken>;
  constructor(private http: HttpClient) {
    // @ts-ignore
    this.currentUserSubject = new BehaviorSubject<UserToken>(JSON.parse(localStorage.getItem('user')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(body) {
    return this.http.post<any>(`${API_URL}/login`, body)
      .pipe(map(user => {
        localStorage.setItem('user', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }
  logout() {
    localStorage.clear();
    // @ts-ignore
    this.currentUserSubject.next(null);
  }
  get currentUserValue() {
    return this.currentUserSubject.value;
  }

  register(singUpForm : any): Observable<User> {
    return this.http.post(`${API_URL}/register`, singUpForm);
  }
  changePassword(currentUserId: number, changePassword: any): Observable<User> {
    return this.http.post<User>(`${API_URL}/changePassword/${currentUserId}`, changePassword);
  }

  checkUserName(username: any): Observable<boolean> {
    return this.http.get<boolean>(`${API_URL}/username/${username}`);
  }
}
