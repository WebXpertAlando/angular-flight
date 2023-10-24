import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: any;
  logout: any;
  checkAuthenticated: any;

  constructor() { }
}
