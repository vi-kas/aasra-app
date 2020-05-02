import { Component } from '@angular/core';
import { IThumbnailContent } from '../common/components/projectThumbnail/projectThumbnail.modal';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styles: [
    `
      .projectHeroTitle {
        color: #000000;
        font-family: 'Libre Baskerville', Arial, Helvetica, 'Nimbus Sans L',
          sans-serif;
        hyphens: manual;
        -webkit-transform: scaleX(1.2);
        transform: scaleY(1.2);
        font-weight: bold;
        letter-spacing: 1px;
        font-variant: small-caps slashed-zero;
      }
      .projectHeroDescription {
        padding-top: 1%;
        font-size: 1.15em;
        font-family: Georgia, serif;
      }
      .homeHeroDescription {
        padding-top: 3%;
        font-size: 1.15em;
        font-family: Georgia, serif;
      }
      .newsText {
        color: #000000;
        font-family: 'Libre Baskerville', Arial, Helvetica, 'Nimbus Sans L',
          sans-serif;
        font-weight: 500;
        letter-spacing: 1.5px;
        font-variant: small-caps slashed-zero;
      }
      .card-title-text {
        color: #000000;
        font-family: 'Libre Baskerville', Arial, Helvetica, 'Nimbus Sans L',
          sans-serif;
        font-weight: 900;
        letter-spacing: 1px;
        color: #e81a5b;
      }
    `,
  ],
})
export class HomeComponent {
  public slides = [{ src: '../assets/images/gallery/aasra_00.jpg' }];

  public projectThumbnail: IThumbnailContent[] = [
    {
      id: 1,
      title: 'AASRA NON-FORMAL EDUCATION ',
      imageUrl: '../../../../assets/images/unsplash_1.jpg',
      description: `
    We started a non formal education center for children in hatwara basti for
    those children who are dropouts or never went to schools. Currently we have
    30 students in our center.`,
    },
    {
      id: 2,
      title: 'TITLE FOR SECOND PROJECT IN JAIPUR',
      imageUrl: '../../../../assets/images/unsplash_2.jpg',
      description: `
    We started a non formal education center for children in hatwara basti for
    those children who are dropouts or never went to schools. Currently we have
    30 students in our center.`,
    },
    {
      id: 3,
      title: 'TITLE FOR THIRD PROJECT IN JAIPUR',
      imageUrl: '../../../../assets/images/unsplash_3.jpg',
      description: `
    We started a non formal education center for children in hatwara basti for
    those children who are dropouts or never went to schools. Currently we have
    30 students in our center.`,
    },
    {
      id: 4,
      title: 'TITLE FOR FOURTH PROJECT IN JAIPUR',
      imageUrl: '../../../../assets/images/unsplash_2.jpg',
      description: `
    We started a non formal education center for children in hatwara basti for
    those children who are dropouts or never went to schools. Currently we have
    30 students in our center.`,
    },
  ];
}
