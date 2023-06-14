import { Component, Input} from '@angular/core';
import { Tarea } from 'src/app/models/tarea.model';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent {
  @Input() tarea!: Tarea ;
  editar: boolean = false;

  editarClick(value: boolean){
    this.editar = value 
  }
}
