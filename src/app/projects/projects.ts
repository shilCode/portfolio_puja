import { Component, signal } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { userData } from '../data/userData';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, MatCardModule, MatChipsModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  headline = 'Projects';
  projects = signal(userData.projects);
}


