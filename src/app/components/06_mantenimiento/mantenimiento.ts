import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MiModalComponent } from '../mi-modal/mi-modal.component';

@Component({
  selector: 'app-mantenimiento',
  standalone: false,
  templateUrl: './mantenimiento.html',
  styleUrls: ['./mantenimiento.scss'], // Nota: corregí styleUrl a styleUrls por convención
})
export class Mantenimiento {
  constructor(private dialog: MatDialog) {}

  abrirVentana() {
    this.dialog.open(MiModalComponent, {
      width: '90%',
      height: '90vh',
      maxWidth: '1100px',
      disableClose: false,
      autoFocus: false,
      panelClass: 'modal-sin-bordes',
    });
  }

  abrirWhatsApp(): void {
    const url =
      'https://wa.me/5492214081328?text=Hola%2C+necesito+un+presupuesto+para...&utm_source=sitio&utm_content=abono-hogar';
    window.open(url, '_blank');
  }
}
