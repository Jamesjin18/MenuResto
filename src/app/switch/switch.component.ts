import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent {
  @Input() restaurantName: string = "";
  @Output() toggleState = new EventEmitter<boolean>();
  constructor() { }

  onChange($event: MatSlideToggleChange) {
    //send toggleState to parent
    this.toggleState?.emit($event.checked);
  }

}
