import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-quantux',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './quantux.component.html',
  styleUrl: './quantux.component.css'
})
export class QuantuxComponent {
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
