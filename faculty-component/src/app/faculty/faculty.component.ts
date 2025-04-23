import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faculty',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent {
  facultyList = [
    { id: 1, faculty: 'Dr.', name: 'Anil Sharma', department: 'Computer Science', university: 'IIT Delhi', city: 'New Delhi', state: 'Delhi' },
    { id: 2, faculty: 'Prof.', name: 'Suman Joshi', department: 'Electrical', university: 'IIT Bombay', city: 'Mumbai', state: 'Maharashtra' },
    { id: 3, faculty: 'Dr.', name: 'Ravi Kumar', department: 'Mechanical', university: 'NIT Trichy', city: 'Tiruchirappalli', state: 'Tamil Nadu' },
    { id: 4, faculty: 'Dr.', name: 'Megha Rao', department: 'Civil', university: 'IISc Bangalore', city: 'Bangalore', state: 'Karnataka' },
    { id: 5, faculty: 'Prof.', name: 'Kiran Desai', department: 'Architecture', university: 'CEPT Ahmedabad', city: 'Ahmedabad', state: 'Gujarat' },
    { id: 6, faculty: 'Dr.', name: 'Manoj Singh', department: 'Chemical', university: 'IIT Kanpur', city: 'Kanpur', state: 'Uttar Pradesh' },
    { id: 7, faculty: 'Dr.', name: 'Neha Gupta', department: 'Biotech', university: 'BITS Pilani', city: 'Pilani', state: 'Rajasthan' },
    { id: 8, faculty: 'Prof.', name: 'Ajay Verma', department: 'Physics', university: 'JNU', city: 'Delhi', state: 'Delhi' },
    { id: 9, faculty: 'Dr.', name: 'Sneha Iyer', department: 'Mathematics', university: 'IIT Madras', city: 'Chennai', state: 'Tamil Nadu' },
    { id: 10, faculty: 'Prof.', name: 'Rahul Mehta', department: 'Humanities', university: 'University of Mumbai', city: 'Mumbai', state: 'Maharashtra' },
  ];
}
