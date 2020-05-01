import { Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { ContactComponent } from './contact/contact.component';
import { Error404Component } from './common/errors/404.component';
import { EventRouteActivator } from './events/event-details/eventrouteactivator.service';
import { EventListResolver } from './events/eventlistresolver.service';
import { FrontComponent } from './home/front.component';
import { ProjectComponent } from './projects/project.component';
import { VolunteersComponent } from './volunteers/volunteers.component';

export const appRoutes: Routes = [
  {
    path: 'front',
    component: FrontComponent,
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
  {
    path: 'volunteers',
    component: VolunteersComponent,
  },
  { path: 'contactus', component: ContactComponent },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/front', pathMatch: 'full' },
];
