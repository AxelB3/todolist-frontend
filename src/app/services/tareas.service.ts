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
}
