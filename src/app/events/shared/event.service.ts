import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { IEvent } from './event.model';

@Injectable()
export class EventService {
  getEvents(): Observable<IEvent[]> {
    let subject = new Subject<IEvent[]>();

    setTimeout(() => {
      subject.next(EVENTS);
      subject.complete();
    }, 100);

    return subject;
  }

  getEvent(id: number): IEvent {
    return EVENTS.find((event) => event.id === id);
  }
}

const EVENTS: IEvent[] = [
  {
    id: 1,
    title: 'First Event',
    location: {
      id: 1,
      address: 'clementi avenue 3',
      zip: 120400,
    },
  },
  {
    id: 2,
    title: 'Second Event',
    location: {
      id: 1,
      address: 'clementi avenue 3',
      zip: 120400,
    },
  },
  {
    id: 3,
    title: 'Third Event',
    location: {
      id: 1,
      address: 'clementi avenue 3',
      zip: 120400,
    },
  },
  {
    id: 4,
    title: 'Fourth Event',
    location: {
      id: 1,
      address: 'clementi avenue 3',
      zip: 120400,
    },
  },
];
