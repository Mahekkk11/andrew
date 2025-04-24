import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FacultyListComponent } from "./faculty-list/faculty-list.component";

@Component({
  selector: 'app-root',
  imports: [FacultyListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'faculty-list';
}
