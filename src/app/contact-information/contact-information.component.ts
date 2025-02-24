import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-information',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './contact-information.component.html',
  styleUrl: './contact-information.component.css'
})
export class ContactInformationComponent {
  @Input() contactForm:FormGroup;
  @Output() formSubmit=new EventEmitter<void>()
  onSub(){
    this.formSubmit.emit();
  }
}
