import { Component, Input } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { TareaComponent } from '../tarea/tarea.component';

@Component({
  selector: 'app-tarea-form',
  templateUrl: './tareaForm.component.html',
  styleUrls: ['./tareaForm.component.css']
})
export class TareaFormComponent {
  constructor(
    private appComponent: AppComponent,
    private tarea: TareaComponent
    ) { }

  displayNuevaTarea(value: boolean){
    this.appComponent.displayNuevaTarea(value)
  }

  @Input() editar: boolean = false;
  @Input() titulo: string = "";
  @Input() descripcion: string = "";

}
