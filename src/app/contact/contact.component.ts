import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';
import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule,JsonPipe,NgFor,NgIf,AlertComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'], // Fixed typo here
})
export class ContactComponent {
  @Input() showAlert: boolean = true;
  constructor(private service: DataService) {}
  formcover:string='rrrr'
  data:any
  editingRowId: any = null;
   
  studentobj: any = {
  
    firstName: '',
    lastName: '', // Fixed capitalization
    username: '',
    email:'', // Changed to camelCase for consistency
    city: '',
    zip: '',
    isTerm: false, // Changed to camelCase for consistency
  };
ngOnInit(){
  this.getdataapi()

}
  
  onSubmit() {
  this.service.postData(this.studentobj).subscribe(
     (res) => {
      console.log('Response:', res);
    }
  );
}
onDelete(item:any){

  const id = item.id; 
 this.service.deletedata(id).subscribe(
  (response)=>{
  console.log('data delete sucessfully',response)
 });
     
     
}
 onEdit(item: any): void {
    this.editingRowId = item.id; // Set the row to edit mode
  }

  // Save the updated data
  onSave(item: any): void {
    const id = item.id;

    this.service.updateData(id, item).subscribe(
      (response) => {
        console.log('Data updated successfully:', response);
        this.editingRowId = null; // Exit edit mode
      },
      (error) => {
        console.error('Error updating data:', error);
      }
    );
  }

  // Cancel editing
  onCancel(): void {
    this.editingRowId = null; // Exit edit mode without saving
  }


  getdataapi(){
    
    this.service.getData().subscribe((result)=>{
      console.log(result)
      this.data=result
      console.log(this.data);
      
    })
  }
   
  // Reset the form object to its initial state
  onSub() {
    this.studentobj = {
      firstName: '',
      lastName: '',
      username: '',
      email:'',
      city: '',
      zip: '',
      isTerm: false,
    };
  }
  
}
