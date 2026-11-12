import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mi-modal',
  standalone: false,
  templateUrl: './mi-modal.component.html',
  styleUrls: ['./mi-modal.component.css'], // Mantenemos .css tal como lo tienes[cite: 9]
})
export class MiModalComponent {
  // Inyectamos la referencia por si necesitas interactuar con el diálogo más adelante
  constructor(public dialogRef: MatDialogRef<MiModalComponent>) {}

  abrirWhatsApp(): void {
    const url =
      'https://wa.me/5492214081328?text=Hola%2C+necesito+un+presupuesto+para...&utm_source=sitio&utm_content=abonos-edificios';
    window.open(url, '_blank');
  }
}
