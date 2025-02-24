import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactInformationComponent } from '../contact-information/contact-information.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ContactInformationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Note: Corrected the property name to `styleUrls`.
})
export class HomeComponent {
  // data: string[] = []; // Store multiple values in an array

  // constructor(private apidata: DataService) {}

  // ngOnInit() {
  
  //   this.apidata.getData().subscribe((res: any) => {
  //     this.data = res.map((item: any) => item.fname); // Extract all `fname` values into the array
  //   });
  // }
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Submitted', this.contactForm.value);
      alert('Message sent successfully!');
      this.contactForm.reset();
    } else {
      alert('Please fill the form correctly.');
    }
  }
}
