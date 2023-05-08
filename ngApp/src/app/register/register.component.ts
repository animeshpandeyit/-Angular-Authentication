import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  // registeredUserData = { email: '', password: '' };
  registeredUserData = { email: '', password: '' };

  constructor(private _auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  registerUser() {
    this._auth
      .registerUser(this.registeredUserData)
      .subscribe({
        next: (res) => console.log(res),
        error: (err) => console.log(err),
      });
    console.log(this.registeredUserData);
  }
}
// .subscribe(next?: ((value: any) => void) | null | undefined, error?: ((error: any) => void) | null | undefined, complete?: (() => void) | null | undefined): Subscription (+1 overload)
