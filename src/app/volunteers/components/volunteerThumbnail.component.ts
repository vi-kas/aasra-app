import { Component, Input } from '@angular/core';
import { IVolunteer } from './volunteer.modal';

@Component({
  selector: 'volunteer-thumbnail',
  templateUrl: './volunteerThumbnail.component.html',
  styles: [
    `
      .thumbnail-div {
        height: 200px;
        width: 200px;
        margin-right: 50px;
        margin-bottom: 100%;
        padding: auto 25px;
      }
      .thumbnail-img {
        border-radius: 50%;
        display:block;
        margin:auto;
        margin-top:10px;
        width: 90%;
        height: 90%;
      }
      .thumbnail-text-div {
        padding: 10px;
        margin-top: 30px;
        border-radius: 0.1em;
        width: 100%;
        height: 40%;
        background-color: #f2f2f2;
        border-color: #f2f2f2;
      }
      .volunteer-name {
        color: #000000;
        font-family: 'Libre Baskerville', Arial, Helvetica, 'Nimbus Sans L',
          sans-serif;
        font-size: 1.1em;
        font-weight: 500;
        font-style: normal;
        letter-spacing: -0.5%;
      }
      .volunteer-designation {
        font-family: 'Libre Baskerville', Arial, Helvetica, 'Nimbus Sans L',
        font-size: 0.9em;
        color: #737373;
      }
    `,
  ],
})
export class VolunteerThumbnailComponent {
  @Input() volunteer: IVolunteer;
}
