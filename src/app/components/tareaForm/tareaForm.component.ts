import { Component, Input } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { TareasService } from '../../services/tareas.service';
import { Tarea } from '../../models/tarea.model';

@Component({
  selector: 'app-tarea-form',
  templateUrl: './tareaForm.component.html',
  styleUrls: ['./tareaForm.component.css'],
})
export class TareaFormComponent {
  constructor(
    private appComponent: AppComponent,
    private tareasService: TareasService
  ) {}

  displayNuevaTarea(value: boolean) {
    this.appComponent.displayNuevaTarea(value);
  }

  @Input() titulo: string = '';
  @Input() descripcion: string = '';


  crearTarea() {
    const params: any = { titulo: this.titulo, descripcion: this.descripcion };
    this.tareasService.crearTareas(params).subscribe((data: any) => {
      if (data.success) {
        this.appComponent.tareas = data.tareas;
        this.displayNuevaTarea(false);
      }
    });
  }
}
