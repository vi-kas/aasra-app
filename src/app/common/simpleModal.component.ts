import { Component, Input } from '@angular/core';

@Component({
  selector: 'simple-modal',
  template: `
    <div id="{{ elementId }}" class="modal fade" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">
              <span>&times;</span>
              <h4 class="modal-title">{{ title }}</h4>
            </button>
          </div>
          <div class="modal-body">
            <ng-content></ng-content>
          </div>
        </div>
      </div>
    </div>
  `,
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
