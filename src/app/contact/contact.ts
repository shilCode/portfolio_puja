import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { userData } from '../data/userData';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgIf, MatCardModule, MatButtonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  email = userData.contact.email;
  location = userData.contact.location ?? '';
}


