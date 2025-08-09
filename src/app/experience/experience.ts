import { Component, signal } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { userData } from '../data/userData';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [NgFor, MatCardModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  headline = 'Experience';
  items = signal(userData.experiences);
}


