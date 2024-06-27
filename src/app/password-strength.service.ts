import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordStrengthService {

  constructor() { }

  evaluatePassword(password: string): string {
    if (password.length < 8) {
      return 'short';
    }
    
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (hasLetters && hasDigits && hasSymbols) {
      return 'strong';
    } else if (
      (hasLetters && hasDigits) ||
      (hasLetters && hasSymbols) ||
      (hasDigits && hasSymbols)
    ) {
      return 'medium';
    } else {
      return 'easy';
    }
  }
}
