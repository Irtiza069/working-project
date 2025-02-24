import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-reativeform',
  standalone: true,
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './reativeform.component.html',
  styleUrls: ['./reativeform.component.css'], // Fixed typo
})
export class ReativeformComponent {
  constructor(private service:DataService){}
  studentform: FormGroup = new FormGroup({
    firstName: new FormControl(''), // Optional: Provide default values
    lastName: new FormControl(''),
    userName: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zipcode: new FormControl(''),
    isacceptTerm: new FormControl(false), // Default value for checkbox
  });

  formvalue: any;

  onsave() {
    this.service.postData(this.studentform.value).subscribe(
      (res) => {
       console.log('Response:', res);
     }
   );
    this.formvalue = this.studentform.value; // Corrected to capture form value
    console.log(this.formvalue);
  }
}
