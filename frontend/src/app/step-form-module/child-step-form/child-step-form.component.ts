import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-step-form',
  templateUrl: './child-step-form.component.html',
  styleUrls: ['./child-step-form.component.css']
})
export class ChildStepFormComponent {

  @Input() activeIndex:number = 0
}
