import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './todo.component.html',
  styles: [],
})
export class TodoComponent {}
