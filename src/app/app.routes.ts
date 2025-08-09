import { Routes } from '@angular/router';
import { Hero } from './hero/hero';

export const routes: Routes = [
  { path: '', component: Hero, pathMatch: 'full' },
  {
    path: 'skills',
    loadComponent: () =>
      import('./skills/skills').then((m) => m.Skills),
  },
  {
    path: 'experience',
    loadComponent: () =>
      import('./experience/experience').then((m) => m.Experience),
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./projects/projects').then((m) => m.Projects),
  },
  { path: '**', redirectTo: '' },
];
