import { Component, OnInit } from '@angular/core';
import { IProject } from './project.model';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ValueTransformer } from '@angular/compiler/src/util';
import { Router } from '@angular/router';
import { IThumbnailContent } from '../common/components/projectThumbnail/projectThumbnail.modal';

@Component({
  templateUrl: './project.component.html',
  styles: [
    `
      #projectHeroTitle {
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
      #projectHeroDescription {
        padding-top: 1%;
        font-size: 1.15em;
        font-family: Georgia, serif;
      }
    `,
  ],
})
export class ProjectComponent implements OnInit {
  projectForm: FormGroup;
  title: FormControl;
  description: FormControl;

  public projectThumbnail: IThumbnailContent[] = [
    {
      id: 1,
      title: 'AASRA NON-FORMAL EDUCATION CENTER',
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

  constructor(private router: Router) {}

  ngOnInit() {
    this.title = new FormControl('', Validators.required);
    this.description = new FormControl('', [
      Validators.required,
      Validators.maxLength(400),
      this.restrictedWords(['foo', 'bar']),
    ]);

    this.projectForm = new FormGroup({
      title: this.title,
      description: this.description,
    });
  }

  private restrictedWords(words) {
    return (control: FormControl): { [key: string]: any } => {
      if (!words) null;

      var invalidWords = words
        .map((w) => (control.value.includes(w) ? w : null))
        .filter((w) => w != null);

      return invalidWords && invalidWords.length > 0
        ? { restrictedWords: invalidWords }
        : null;
    };
  }

  saveProject(values) {
    let project: IProject = {
      id: undefined,
      title: values.title,
      description: values.description,
    };

    console.log(project);
  }

  cancel() {
    this.router.navigate(['home']);
  }
}
