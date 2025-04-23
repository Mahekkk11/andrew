import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  facultyList = [
    { id: 1, name: 'Dr. Hitu', department: 'Computer Science', email: 'hitu@example.com' },
    { id: 2, name: 'Prof. Sneha', department: 'Electronics', email: 'sneha@example.com' },
    { id: 3, name: 'Prof. Aman', department: 'IT', email: 'aman@example.com' },
    {id : 4, name: 'Dr. Riya', department: 'Mathematics', email: 'riya@example.com'},
    {id:5, name: 'Dr. Neha', department: 'computer science', email: 'xyz@gmail.com'}
  ];

  getData() {
    return this.facultyList;
  }


}
