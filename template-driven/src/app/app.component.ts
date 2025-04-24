import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentTemplateFormComponent } from "./student-template-form/student-template-form.component";

@Component({
  selector: 'app-root',
  imports: [StudentTemplateFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'template-driven';
}
