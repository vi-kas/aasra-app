import { Component, Input } from '@angular/core';

@Component({
  selector: 'simple-modal',
  templateUrl: './simpleModal.component.html',
  styles: [
    `
      .modal-body {
        hight: 250px;
        overflow-y: scroll;
      }
    `,
  ],
})
export class SimpleModalComponent {
  @Input() elementId: string;
  @Input() title: string;
}
