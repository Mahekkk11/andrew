import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-template-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-template-form.component.html',
  styleUrls: ['./student-template-form.component.css']
})
export class StudentTemplateFormComponent {
  student = {
    rollno: '',
    name: '',
    class: '',
    city: '',
    state: '',
    country: '',
    mobile: ''
  };

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form Submitted:', this.student);
      alert('Form submitted successfully!');
    } else {
      alert('Please fill all the required fields!');
    }
  }
}
