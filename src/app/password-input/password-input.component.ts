import { Component } from '@angular/core';
import { PasswordStrengthService } from '../password-strength.service';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css']
})
export class PasswordInputComponent {
  password: string = '';
  strength: string = '';

  constructor(private passwordStrengthService: PasswordStrengthService) { }

  onPasswordInput(event: any): void {
    this.password = event.target.value;
    this.strength = this.passwordStrengthService.evaluatePassword(this.password);
  }
  getStrengthClass(index: number): string {
    if (this.password.length === 0) {
      return 'strength-bar';
    } else if (this.password.length < 8) {
      return 'strength-bar red';
    }
  
    switch (this.strength) {
      case 'easy':
        return index === 1 ? 'strength-bar red' : 'strength-bar';
      case 'medium':
        return index <= 2 ? 'strength-bar yellow' : 'strength-bar';
      case 'strong':
        return 'strength-bar green';
      default:
        return 'strength-bar';
    }
  }  
}  
