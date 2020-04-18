import { Injectable } from '@angular/core';

@Injectable()
export class EventService {
  getEvents() {
    return EVENTS;
  }
}

const EVENTS = [
  {
    id: 1,
    title: 'First Event',
  },
  {
    id: 2,
    title: 'Second Event',
  },
];
