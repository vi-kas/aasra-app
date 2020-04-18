import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class EventService {
  getEvents() {
    let subject = new Subject();

    setTimeout(() => {
      subject.next(EVENTS);
      subject.complete();
    }, 2000);

    return subject;
  }

  getEvent(id: number) {
    return EVENTS.find((event) => event.id === id);
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
  {
    id: 3,
    title: 'Third Event',
  },
  {
    id: 4,
    title: 'Fourth Event',
  },
];
