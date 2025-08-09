import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, computed, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private isDarkSignal = signal(false);
  readonly isDark = computed(() => this.isDarkSignal());

  constructor(@Inject(DOCUMENT) private documentRef: Document) {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark' || stored === 'light') {
      this.applyTheme(stored);
      return;
    }
    const prefersDark = globalThis.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
    this.applyTheme(prefersDark ? 'dark' : 'light');
  }

  toggle(): void {
    this.applyTheme(this.isDarkSignal() ? 'light' : 'dark');
  }

  private applyTheme(theme: 'light' | 'dark'): void {
    this.isDarkSignal.set(theme === 'dark');
    this.documentRef.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }
}


