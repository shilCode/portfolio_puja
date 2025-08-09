import { Component, signal } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { userData } from '../data/userData';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor, MatChipsModule, MatIconModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  headline = 'Skills';
  skills = signal(userData.skills);
}


