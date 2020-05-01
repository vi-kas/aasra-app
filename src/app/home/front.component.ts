import { Component, Inject, AfterViewInit, OnDestroy } from '@angular/core';
import { IThumbnailContent } from '../common/components/projectThumbnail/projectThumbnail.modal';
import { JQ_TOKEN } from '../common/services/jquery.service';

@Component({
  selector: 'front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css'],
})
export class FrontComponent implements AfterViewInit, OnDestroy {
  public slides = [{ src: '../assets/images/gallery/aasra_00.jpg' }];

  constructor(@Inject(JQ_TOKEN) private $: any) {}

  ngAfterViewInit() {
    this.$('.fancybox').fancybox({
      openEffect: 'none',
      closeEffect: 'none',
    });

    this.$('.zoom').hover(
      function () {
        this.$(this).addClass('transition');
      },
      function () {
        this.$(this).removeClass('transition');
      }
    );
  }

  ngOnDestroy() {
    this.$('.fancybox').off();
  }

  ngOnInit(): void {}

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
