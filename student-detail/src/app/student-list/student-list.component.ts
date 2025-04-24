import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  students = [
    { rollNo: 1, name: 'Aman', division: 'A', city: 'Pune', state: 'Maharashtra', country: 'India' },
    { rollNo: 2, name: 'Priya', division: 'B', city: 'Delhi', state: 'Delhi', country: 'India' },
    { rollNo: 3, name: 'Raj', division: 'A', city: 'Mumbai', state: 'Maharashtra', country: 'India' },
    { rollNo: 4, name: 'Simran', division: 'C', city: 'Bangalore', state: 'Karnataka', country: 'India' },
    { rollNo: 5, name: 'Rahul', division: 'B', city: 'Hyderabad', state: 'Telangana', country: 'India' },
    { rollNo: 6, name: 'Neha', division: 'C', city: 'Chennai', state: 'Tamil Nadu', country: 'India' },
    { rollNo: 7, name: 'Sohan', division: 'A', city: 'Ahmedabad', state: 'Gujarat', country: 'India' },
    { rollNo: 8, name: 'Riya', division: 'B', city: 'Kolkata', state: 'West Bengal', country: 'India' },
    { rollNo: 9, name: 'Ankit', division: 'C', city: 'Nagpur', state: 'Maharashtra', country: 'India' },
    { rollNo: 10, name: 'Sneha', division: 'A', city: 'Surat', state: 'Gujarat', country: 'India' }
  ];
}
