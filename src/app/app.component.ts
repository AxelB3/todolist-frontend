import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolist-frontend';
  nuevaTarea: boolean = false;
  displayNuevaTarea(value: boolean) {
    this.nuevaTarea = value;
  }

  
}
