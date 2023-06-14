import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TareaComponent } from './components/tarea/tarea.component';
import { BotonComponent } from './components/boton/boton.component';
import { TareaFormComponent } from './components/tareaForm/tareaForm.component';
import { TareaEditarComponent } from './components/tareaEditar/tarea-editar/tarea-editar.component';
@NgModule({
  declarations: [
    AppComponent,
    TareaComponent,
    BotonComponent,
    TareaFormComponent,
    TareaEditarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
