import { Component, Input } from '@angular/core';
import { IThumbnailContent } from './projectThumbnail.modal';

@Component({
  selector: 'project-thumbnail',
  templateUrl: './projectThumbnail.component.html',
  styles: [
    `
      .thumbnail-div {
        height: 350px;
        width: 380px;
        padding-top: 10%;
        padding-right: 6%;
      }
      .title-text {
        color: #000000;
        font-family: 'Libre Baskerville', Arial, Helvetica, 'Nimbus Sans L',
          sans-serif;
        hyphens: manual;
        -webkit-transform: scaleX(1.2);
        transform: scaleY(1.2);
        font-size: 1.1em;
        font-weight: 500;
        font-style: normal;
        letter-spacing: -0.5%;
        font-variant: small-caps slashed-zero;
      }
      .thumbnail-img {
        max-width: 100%;
        max-height: 100%;
        border-radius: 0.3em;
      }
      .thumbnail-img:hover {
        transform: scale(1.025);
        transition: transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.84);
      }
      .description-text {
        font-family: Georgia, serif;
      }
      .continue-reading-text {
        color: #e81a5b;
        font-family: Georgia, serif;
        font-size: 1.1em;
        font-weight: 800;
        letter-spacing: -1px;
      }
    `,
  ],
})
export class ProjectThumbnailComponent {
  @Input() thumbnailContent: IThumbnailContent;

  constructor() {}
}
