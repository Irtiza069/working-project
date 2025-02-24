import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { AlertComponent } from '../alert/alert.component';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ContactComponent,AlertComponent ,CurrencyPipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements AfterViewInit{
  amount=123.55;
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.png';
  // import a component using @viewchild
@ViewChild(ContactComponent) formq?:ContactComponent;
ngAfterViewInit(): void {
  //  debugger;
  const formcover =this.formq?.formcover
  console.log("rfbhufabhufdb")
}
}
