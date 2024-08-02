import { Component } from '@angular/core';

@Component({
  selector: 'app-controlflows',
  standalone: true,
  imports: [],
  templateUrl: './controlflows.component.html',
  styleUrl: './controlflows.component.css'
})
export class ControlflowsComponent {
  a = 10;
  b = 20;

  array = [1, 2, 3, 4, 5];

  items = [
    {id: 1, name: "Name1"},
    {id: 2, name: "Name2"},
    {id: 3, name: "Name3"},
    {id: 4, name: "Name4"},
  ]

  emptyArray = [];
}
