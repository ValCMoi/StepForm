import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-step-form',
  templateUrl: './step-form.component.html',
  styleUrls: ['./step-form.component.css'],
})
export class StepFormComponent implements OnInit {

 
  @Input() items: MenuItem[] | undefined;

  activeIndex: number = 0;

  constructor() {}

  onActiveIndexChange(event: number) {
      this.activeIndex = event;
  }


  ngOnInit() {
    /*
      this.items = [
          {
              label: 'Personal',
          },
          {
              label: 'Seat',
          },
          {
              label: 'Payment',
          },
          {
              label: 'Confirmation',
          }
      ];
      */

      console.table(this.items)
  }
}
