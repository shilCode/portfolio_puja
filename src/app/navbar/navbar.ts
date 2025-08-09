import { Component, HostBinding, HostListener, computed, inject } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ThemeService } from '../core/theme.service';
import { userData } from '../data/userData';

@Component({
  selector: 'app-navbar',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    NgIf,
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  private theme = inject(ThemeService);
  isDark = computed(() => this.theme.isDark());
  logoPath = userData.logoPath ?? '';
  private hasScrolled = false;

  @HostBinding('class.scrolled')
  get scrolled(): boolean {
    return this.hasScrolled;
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const newValue = window.scrollY > 8;
    if (newValue !== this.hasScrolled) {
      this.hasScrolled = newValue;
    }
  }

  onToggleTheme(): void {
    this.theme.toggle();
  }
}
