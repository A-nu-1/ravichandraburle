import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Experience } from './pages/experience/experience';
import { Impact } from './pages/impact/impact';
import { Resume } from './pages/resume/resume';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'experience',
    component: Experience,
  },
  {
  path: 'impact',
  component: Impact,
},
  {
  path: 'resume',
  component: Resume,
},
{
  path: 'contact',
  component: Contact,
},
{
  path: '**',
  redirectTo: '',
},
];