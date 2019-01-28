import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lesson5';
  name = 'Some name';
  isActive = true;
  constructor() {
    setTimeout(() => {
      // this.name = 'new value';
      this.isActive = false;
    }, 2000);
  }
  onNameChangeHandler(value) {
    console.log(value);
  }
}
