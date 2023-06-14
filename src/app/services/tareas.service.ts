import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  private baseUrl = 'http://localhost:3001/'
  constructor (private http: HttpClient) {}

  public getTareas(){
    return this.http.get(this.baseUrl.concat("tareas"));
  }

  public crearTareas(params: any[]){
    return this.http.post(this.baseUrl.concat("tareas/crear"), params)
  }

  public actualizarTarea(params: any[]){
    return this.http.put(this.baseUrl.concat("tareas/actualizar"), params)
  }

  public eliminarTarea(params: any[]){
    return this.http.put(this.baseUrl.concat("tareas/eliminar"), params)
  }
}
