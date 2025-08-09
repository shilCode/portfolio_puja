import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NgFor, NgIf } from '@angular/common';
import { userData } from '../data/userData';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatCardModule, NgFor, NgIf],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  summary = userData.about?.summary ?? '';
  highlights = userData.about?.highlights ?? [];
}


