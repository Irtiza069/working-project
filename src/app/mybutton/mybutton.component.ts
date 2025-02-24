import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-mybutton',
  standalone: true,
  imports: [],
  templateUrl: './mybutton.component.html',
  styleUrl: './mybutton.component.css'
})
export class MybuttonComponent {
@Input()btntext : string='';
@Input()btnClass :string='';
}
