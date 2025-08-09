import { Component } from '@angular/core';
import { userData } from '../data/userData';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  currentYear = new Date().getFullYear();
  footerText = userData.footer.text;
}
