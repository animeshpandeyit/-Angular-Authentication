import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginUserData = {
    email: '',
    password: '',
  };
  constructor(private _auth: AuthService, private router: Router) {}

  ngOnInit() {}
  loginUser() {
    this._auth.loginUser(this.loginUserData).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
    });
    console.log(this.loginUserData);
  }
}
