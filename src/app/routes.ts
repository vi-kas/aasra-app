import { Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { ContactComponent } from './contact/contact.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/eventrouteactivator.service';
import { EventListResolver } from './events/eventlistresolver.service';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './projects/project.component';

export const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'events',
    component: EventsComponent,
    resolve: { events: EventListResolver },
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    canActivate: [EventRouteActivator],
  },
  {
    path: 'projects',
    component: ProjectComponent,
  },
  { path: 'contactus', component: ContactComponent },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'user',
    loadChildren: () =>
      import('./user/user.module').then((mod) => mod.UserModule),
  },
];
