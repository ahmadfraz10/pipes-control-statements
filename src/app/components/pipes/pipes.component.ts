import { Component } from '@angular/core';
import { LowerCasePipe, UpperCasePipe, DatePipe, JsonPipe} from '@angular/common';
@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [LowerCasePipe, UpperCasePipe, DatePipe, JsonPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  firstName: string = "Hello";
  currentDate = new Date();

  student: any = {
    name: "Ahmad",
    city: "Lahore"
  }
}
