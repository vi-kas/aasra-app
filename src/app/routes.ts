import { Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { ContactComponent } from './contact/contact.componect';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/eventrouteactivator.service';
import { EventListResolver } from './events/eventlistresolver.service';

export const appRoutes: Routes = [
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
  { path: 'contactus', component: ContactComponent },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  {
    path: 'user',
    loadChildren: () =>
      import('./user/user.module').then((mod) => mod.UserModule),
  },
];
