import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  abrirWhatsApp(): void {
    const url =
      'https://wa.me/5492214081328?text=Hola%2C+necesito+un+presupuesto+para...&utm_source=sitio&utm_content=home';
    window.open(url, '_blank');
  }
}
