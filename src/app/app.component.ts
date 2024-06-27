import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HoriznavbarComponent } from './horiznavbar/horiznavbar.component';
// import{HomeCompComponent} from './home-comp/home-comp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HoriznavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Kishor-Gahatraj';
}
