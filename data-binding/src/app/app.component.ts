import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FacultyProfileComponent } from "./faculty-profile/faculty-profile.component";

@Component({
  selector: 'app-root',
  imports: [FacultyProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'data-binding';
}
