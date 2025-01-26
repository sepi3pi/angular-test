import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PassComponent } from "./pass/pass.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PassComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-tailwind-login';
}
