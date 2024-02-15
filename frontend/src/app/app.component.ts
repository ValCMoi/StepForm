import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontend';
  inputStepForm: MenuItem[] | undefined = []
  constructor(private primeng: PrimeNGConfig){}

  ngOnInit(): void {
    this.primeng.ripple = true

    this.inputStepForm = [{label: 'TOTO'}, {label: 'LALA'}]
  }
}
