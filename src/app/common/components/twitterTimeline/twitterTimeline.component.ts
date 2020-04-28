import { Component } from '@angular/core';

@Component({
  selector: 'twitter-timeline',
  templateUrl: './twitterTimeline.component.html',
  styles: [
    `
      .thumbnail-div {
        height: 400px;
        width: 430px;
        padding-top: 10%;
        padding-right: 6%;
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
