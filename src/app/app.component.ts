import { Component } from '@angular/core';
import { config } from './config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tlo-mockups';

  showSidebar = true;

  get config() {
    return config;
  }
}
