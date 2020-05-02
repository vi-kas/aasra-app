import { Component, Input } from '@angular/core';
import { IGallaryImage } from './bsGallery.modal';

@Component({
  selector: 'bs-gallery',
  templateUrl: './bsGallery.component.html',
  styles: [
    `
      .gallery-image-div {
        width: 20%;
        height: 20%;
        margin: 2%;
      }
      .gallery-image {
        height: 180px;
        border-radius: 1em;
        cursor: pointer;
        transition: 0.3s;
      }
      .gallery-image:hover {
        filter: drop-shadow(8px 8px 10px gray);
        opacity: 0.7;
      }
    `,
  ],
})
export class ImageGallaryComponent {
  @Input() galleryImages: IGallaryImage[];
}
