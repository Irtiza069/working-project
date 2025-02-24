import { CommonModule } from '@angular/common';
import { Component ,Input, OnInit} from '@angular/core';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule,ContactComponent],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent implements OnInit {
@Input() message:string='';
@Input() alertype:string='';
@Input() duration: number = 3000;


isVisible: boolean = true;
isFadingOut: boolean = false;
ngOnInit(): void {
  // Automatically hide the alert after the specified duration
  setTimeout(() => {
    this.isFadingOut = true; // Trigger fade-out animation
    setTimeout(() => {
      this.isVisible = false; // Remove the alert from the DOM after animation
    }, 500); // Wait for the animation to complete (0.5s)
  }, this.duration);
}
}

