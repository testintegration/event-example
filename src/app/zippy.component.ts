import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html'})

export class ZippyComponent {
  visible: boolean = true;
  @Output() open: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();

  toggle() {
    this.visible = !this.visible;
    if (this.visible) {
      this.open.emit(null);
    } else {
      this.close.emit(null);
    }
  }

}
