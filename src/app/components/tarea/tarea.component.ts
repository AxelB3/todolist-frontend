import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent {
  constructor(private appComponent: AppComponent) { }

  displayNuevaTarea(value: boolean){
    this.appComponent.displayNuevaTarea(value)
  }

}
