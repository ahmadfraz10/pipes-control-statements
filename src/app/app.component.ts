import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

// Components
import { NavComponent } from './layouts/nav/nav.component';
import { CommonModule } from '@angular/common';
import { ControlflowsComponent } from './components/controlflows/controlflows.component';
import { PipesComponent } from './components/pipes/pipes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, RouterLink, CommonModule, ControlflowsComponent, PipesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'practice-angular-18';
}
