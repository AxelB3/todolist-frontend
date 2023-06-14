import { Component, Input } from '@angular/core';
import { Tarea } from 'src/app/models/tarea.model';
import { AppComponent } from 'src/app/app.component';
import { TareasService } from '../../services/tareas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css'],
})
export class TareaComponent {
  @Input() tarea!: Tarea;
  editar: boolean = false;
  constructor(
    private tareasService: TareasService,
    private appComponent: AppComponent
  ) {}

  editarClick(value: boolean) {
    this.editar = value;
  }

  eliminar() {
    Swal.fire({
      title: '¿Desea eliminar esta tarea?',
      text: 'Si confirma esta tarea será eliminada',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'No, cancelar',
    }).then((result) => {
      if (result.value) {
        const params: any = {
          id: this.tarea.id,
        };
        this.tareasService.eliminarTarea(params).subscribe((data: any) => {
          if (data.success) {
            Swal.fire(
              'Tarea Eliminada',
              'La tarea ha sido eliminada de manera correcta.',
              'success'
            );
            this.appComponent.tareas = data.tareas;
          }
        });
      }
    });
  }
}
