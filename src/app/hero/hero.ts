import { Component, computed } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { userData } from '../data/userData';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [CommonModule, MatButtonModule, NgIf],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
  name = userData.name;
  subtitle = userData.jobDescription;
  upwork = userData.links.upwork;
  linkedin = userData.links.linkedin;
  logoPath = userData.logoPath ?? '';
}
