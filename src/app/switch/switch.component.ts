import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
  @Input() restaurantName?: string;
  @Output() toggleState = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }
  onChange($event: MatSlideToggleChange) {
    //send toggleState to parent
    this.toggleState?.emit($event.checked);
  }

}
