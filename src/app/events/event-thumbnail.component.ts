import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  template: `
    <div>
      <h2>{{ event.title }}</h2>
      <button class="btn btn-primary" (click)="handleClick()">Like</button>
    </div>
  `,
})
export class EventThumbnailComponent {
  @Input() event: any;
  @Output() eventClick = new EventEmitter();

  eventProperty: string = 'Event Completed.';

  logEventName() {
    console.log('Logging:', this.event.title);
  }

  handleClick() {
    this.eventClick.emit(this.event.title);
  }
}
