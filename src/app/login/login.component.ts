import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../data.service';
import { AlertComponent } from '../alert/alert.component';
import { ContactComponent } from '../contact/contact.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,AlertComponent,ContactComponent,ReactiveFormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @Input() loginForm: FormGroup; // Receive the FormGroup from the parent
  @Output() formSubmit = new EventEmitter<void>(); // Emit form submission event

  onSubmit() {
    this.formSubmit.emit(); // Notify the parent component when the form is submitted
  }
  // constructor(private product:DataService){}
  // loginobj:any={
  //   name:'',
  //   Password:''
  // }
  // @ViewChild(ContactComponent) formq?:ContactComponent;
  //   ngAfterViewInit(): void {
  //     //  debugger;
  //     const formcover =this.formq?.formcover
  //     console.log("rfbhufabhufdb")
  //   }
// dvalue:any
// login(){
//   this.product.postlogindata(this.loginobj).subscribe((res)=>{console.log(res);}
// )
  
  
// }
}
