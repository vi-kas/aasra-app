import {
  Component,
  Inject,
  AfterViewInit,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { IThumbnailContent } from '../common/components/projectThumbnail/projectThumbnail.modal';
import { JQ_TOKEN } from '../common/services/jquery.service';
import { IGallaryImage } from '../common/components/bs-gallery/bsGallery.modal';

@Component({
  selector: 'front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css'],
})
export class FrontComponent {
  public slides = [{ src: '../assets/images/gallery/aasra_00.jpg' }];

  constructor(@Inject(JQ_TOKEN) private $: any) {}

  public galleryImages: IGallaryImage[] = [
    {
      id: 1,
      thumbnail: 'AASRA NON-FORMAL EDUCATION ',
      imageUrl: '../../../../assets/images/unsplash_1.jpg',
      description: `
    We started a non formal education center for children in hatwara basti for
    those children who are dropouts or never went to schools. Currently we have
    30 students in our center.`,
    },
    {
      id: 2,
      thumbnail: 'TITLE FOR SECOND PROJECT IN JAIPUR',
      imageUrl: '../../../../assets/images/unsplash_2.jpg',
      description: `
    We started a non formal education center for children in hatwara basti for
    those children who are dropouts or never went to schools. Currently we have
    30 students in our center.`,
    },
    {
      id: 3,
      thumbnail: 'TITLE FOR THIRD PROJECT IN JAIPUR',
      imageUrl: '../../../../assets/images/unsplash_3.jpg',
      description: `
    We started a non formal education center for children in hatwara basti for
    those children who are dropouts or never went to schools. Currently we have
    30 students in our center.`,
    },
    {
      id: 4,
      thumbnail: 'TITLE FOR FOURTH PROJECT IN JAIPUR',
      imageUrl: '../../../../assets/images/unsplash_2.jpg',
      description: `
    We started a non formal education center for children in hatwara basti for
    those children who are dropouts or never went to schools. Currently we have
    30 students in our center.`,
    },
  ];
}
