import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
})
export class BotonComponent {
  @Input() texto: string = '';
  @Input() variante: string = '';
}
