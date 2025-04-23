import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FacultyComponent } from "./faculty/faculty.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FacultyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'faculty-component';
}
