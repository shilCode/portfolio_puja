import { Component, signal } from '@angular/core';
import { Navbar } from "./navbar/navbar";
import { Footer } from "./footer/footer";
import { Hero } from './hero/hero';
import { Projects } from './projects/projects';
import { About } from './about/about';
import { Skills } from './skills/skills';
import { Experience } from './experience/experience';
import { Contact } from './contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, Hero, About, Projects, Skills, Experience, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio_puja');
}
