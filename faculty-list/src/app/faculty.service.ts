import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  private facultyList = [
    { id: 101, name: 'Dr. Hitu', department: 'Computer Engineering', email: 'hitu@example.com' },
    { id: 102, name: 'Prof. Aman', department: 'IT', email: 'aman@example.com' },
    { id: 103, name: 'Dr. Sneha', department: 'Electronics', email: 'sneha@example.com' },
    { id: 104, name: 'Prof. Raj', department: 'Mechanical', email: 'raj@example.com' }
  ];

  getData() {
    return this.facultyList;
  }
}
