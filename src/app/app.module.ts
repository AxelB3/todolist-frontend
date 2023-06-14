import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { TareaComponent } from './components/tarea/tarea.component';
import { BotonComponent } from './components/boton/boton.component';
import { TareaFormComponent } from './components/tareaForm/tareaForm.component';
@NgModule({
  declarations: [
    AppComponent,
    TareaComponent,
    BotonComponent,
    TareaFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
