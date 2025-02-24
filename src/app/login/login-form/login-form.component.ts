import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginComponent } from '../login.component';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onFormSubmit() {
    if (this.loginForm.valid) {
      const loginObj = this.loginForm.value;
      console.log('Login Object:', loginObj);
      // Perform login logic here
    }
  }
}
