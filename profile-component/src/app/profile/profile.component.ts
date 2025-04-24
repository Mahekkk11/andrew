import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mt-5 text-center">
      <h2>Welcome to Profile Page!</h2>
      <p class="lead">You have successfully logged in.</p>
    </div>
  `,
})
export class ProfileComponent {}
