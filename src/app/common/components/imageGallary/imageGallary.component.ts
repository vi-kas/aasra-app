import { Component, Input } from '@angular/core';
import { IGallaryImage } from './imageGallary.modal';

@Component({
  selector: 'lightbox-basic-example',
  templateUrl: './imageGallary.component.html',
})
export class ImageGallaryComponent {
  @Input() galleryImages: IGallaryImage[];

  images = [
    {
      img:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg',
      thumb:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg',
      description: 'Image 1',
    },
    {
      img:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg',
      thumb:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg',
      description: 'Image 2',
    },
    {
      img:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).jpg',
      thumb:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).jpg',
      description: 'Image 3',
    },
    {
      img:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(123).jpg',
      thumb:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(123).jpg',
      description: 'Image 4',
    },
    {
      img:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(118).jpg',
      thumb:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(118).jpg',
      description: 'Image 5',
    },
    {
      img:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(128).jpg',
      thumb:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(128).jpg',
      description: 'Image 6',
    },
    {
      img:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(132).jpg',
      thumb:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(132).jpg',
      description: 'Image 7',
    },
    {
      img:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(115).jpg',
      thumb:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(115).jpg',
      description: 'Image 8',
    },
    {
      img:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(133).jpg',
      thumb:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(133).jpg',
      description: 'Image 9',
    },
  ];
}
