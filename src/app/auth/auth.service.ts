import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated(): boolean {
    // Finta autenticazione
    return Math.random() > 0.5; // 50% di possibilità di essere autenticati
  }
}
