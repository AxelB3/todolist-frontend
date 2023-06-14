import { Component, OnInit } from '@angular/core';
import { TareasService } from './services/tareas.service';
import { Tarea } from "./models/tarea.model";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  tareas: Tarea[] = [];

  constructor(private tareasService: TareasService) {}

  ngOnInit() {
    this.tareasService.getTareas().subscribe((data) => {
      console.log(data);
      this.tareas = <Tarea []> data;
    });
  }

  title = 'todolist-frontend';
  nuevaTarea: boolean = false;
  displayNuevaTarea(value: boolean) {
    this.nuevaTarea = value;
  }
}
