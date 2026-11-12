import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  standalone: false,
  templateUrl: './contacto.html',
  styleUrl: './contacto.scss',
})
export class Contacto {
  abrirWhatsApp(): void {
    const url =
      'https://wa.me/5492214081328?text=Hola%2C+necesito+un+presupuesto+para...&utm_source=sitio&utm_content=contacto';
    window.open(url, '_blank');
  }
}
