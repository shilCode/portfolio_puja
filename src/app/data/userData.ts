export type Project = {
  name: string;
  description: string;
  tags: string[];
  link?: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  details: string;
};

export type UserData = {
  name: string;
  jobDescription: string;
  links: {
    upwork: string;
    linkedin: string;
  };
  about?: { summary: string; highlights?: string[] };
  projects: Project[];
  skills: { name: string; level?: 'Basic' | 'Intermediate' | 'Advanced' }[];
  experiences: ExperienceItem[];
  contact: {
    email: string;
    location?: string;
  };
  footer: {
    text: string;
  };
  logoPath?: string;
};

export const userData: UserData = {
  name: 'Puja Shil',
  jobDescription: 'Lead Generation | Web Research | Data Entry',
  links: {
    upwork: 'https://www.upwork.com/freelancers/~01703c57d504b663cf?mp_source=share',
    linkedin: 'https://www.linkedin.com/',
  },
  about: {
    summary:
      'I specialize in lead generation, web research, and data entry with an eye for detail and reliable turnaround times.',
    highlights: [
      'B2B prospect list building and validation',
      'Web scraping and data enrichment',
      'CRM updates and spreadsheet automation',
    ],
  },
  projects: [
    {
      name: 'Portfolio Website',
      description: 'Personal site built with Angular Standalone + Material 3.',
      tags: ['Angular', 'Material', 'SCSS'],
    },
    {
      name: 'Task Tracker',
      description: 'PWA with offline-first data sync.',
      tags: ['Angular', 'RxJS', 'IndexedDB'],
    },
    {
      name: 'Design System',
      description: 'Reusable components aligned to Material 3.',
      tags: ['Components', 'Accessibility', 'Theming'],
    },
  ],
  skills: [
    { name: 'QA', level: 'Advanced' },
    { name: 'E2E', level: 'Advanced' },
    { name: 'Data Entry', level: 'Intermediate' },
    { name: 'Material UI', level: 'Advanced' },
    { name: 'HTML', level: 'Advanced' },
    { name: 'SCSS', level: 'Advanced' },

  ],
  experiences: [
    {
      role: 'QA',
      company: 'Shil Tech Solutions',
      period: '2022 — Present',
      details: 'Testing WebApps and Mobile.',
    },
    {
      role: 'UI QA',
      company: 'Scholastica',
      period: '2020 — 2022',
      details: 'QA.',
    },
  ],
  contact: {
    email: 'puja.shil.0007@gmail.com',
    location: 'Remote',
  },
  footer: {
    text: '© Puja Shil',
  },
  logoPath: '/logo.png',
};


