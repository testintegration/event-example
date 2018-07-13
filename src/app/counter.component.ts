import { Component } from '@angular/core';

let instances = 0;

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html'
})

export class CounterComponent {
  id: number;

  constructor() {
    this.id = ++instances;
  }
}
