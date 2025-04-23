import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-faculty-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './faculty-profile.component.html',
  styleUrl: './faculty-profile.component.css'
})
export class FacultyProfileComponent {
  faculty = {
    id: 1,
    name: 'Dr. Hitu',
    department: 'Computer Engineering',
    email: 'hitu@example.com'
  };

  isEditing = false;

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }
}
