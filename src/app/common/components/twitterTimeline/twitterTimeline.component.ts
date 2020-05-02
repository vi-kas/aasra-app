import { Component } from '@angular/core';

@Component({
  selector: 'twitter-timeline',
  templateUrl: './twitterTimeline.component.html',
  styles: [
    `
      .thumbnail-div {
        height: 300px;
        width: 430px;
      }
    `,
  ],
})
export class TwitterTimelineComponent {
  ngAfterViewInit(): void {
    // @ts-ignore
    twttr.widgets.load();
  }
}
