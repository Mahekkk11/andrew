import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacultyService } from '../faculty.service';
import { HighlightCsDirective } from '../highlight-cs.directive'; // adjust path if needed

@Component({
  selector: 'app-faculty-list',
  standalone: true,
  imports: [CommonModule,HighlightCsDirective],
  templateUrl: './faculty-list.component.html',
  styleUrl: './faculty-list.component.css'
})
export class FacultyListComponent implements OnInit {

  facultyData: any[] = [];

  constructor(private facultyService: FacultyService) {}

  ngOnInit() {
    this.facultyData = this.facultyService.getData();
  }
}
