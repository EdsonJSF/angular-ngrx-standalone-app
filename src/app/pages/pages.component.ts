import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './pages.component.html',
  styles: [],
})
export class PagesComponent {}
