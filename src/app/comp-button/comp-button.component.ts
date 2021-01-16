import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-button',
  templateUrl: './comp-button.component.html',
  styleUrls: ['./comp-button.component.scss'],
})
export class CompButtonComponent implements OnInit {
@Input() btnText: string;

  constructor() { }

  ngOnInit() {}

}
