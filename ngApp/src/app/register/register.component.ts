import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  // registeredUserData = { email: '', password: '' };
  registeredUserData = { email: '', password: '' };

  registerUser() {
    console.log(this.registeredUserData);
  }
}
