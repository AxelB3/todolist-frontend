import { Component, Input, OnInit } from '@angular/core';
import { TareaComponent } from '../../tarea/tarea.component';
import { Tarea } from 'src/app/models/tarea.model';
import { AppComponent } from 'src/app/app.component';
import { TareasService } from '../../../services/tareas.service';

@Component({
  selector: 'app-tarea-editar',
  templateUrl: './tarea-editar.component.html',
  styleUrls: ['./tarea-editar.component.css'],
})
export class TareaEditarComponent {
  constructor(
    private tareaComp: TareaComponent,
    private tareasService: TareasService,
    private appComponent: AppComponent

  ) {}

  editarClick(value: boolean) {
    this.tareaComp.editarClick(value);
  }
  
  @Input() tarea!: Tarea;
  tareaEditar!: Tarea;
  @Input() editar: boolean = false;

  ngOnInit() {
    this.tareaEditar = { ...this.tarea };
  }

  actualizarTarea(){
    const params: any = { 
      id: this.tareaEditar.id, 
      titulo: this.tareaEditar.titulo, 
      descripcion: this.tareaEditar.descripcion 
    };

    this.tareasService.actualizarTarea(params).subscribe((data: any) => {
      if (data.success) {
        this.appComponent.tareas = data.tareas;
        this.editarClick(false);
      }
    });
  }
}
