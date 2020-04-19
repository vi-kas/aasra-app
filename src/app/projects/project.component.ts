import { Component, OnInit } from '@angular/core';
import { IProject } from './project.model';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ValueTransformer } from '@angular/compiler/src/util';
import { Router } from '@angular/router';

@Component({
  templateUrl: './project.component.html',
  styles: [
    `
      em {
        float: right;
        color: #e02365;
        padding-left: 10px;
      }
    `,
  ],
})
export class ProjectComponent implements OnInit {
  projectForm: FormGroup;
  title: FormControl;
  description: FormControl;

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
