import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  isMenuOpen: boolean = false;
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  abrirWhatsApp(): void {
    const url =
      'https://wa.me/5492214081328?text=Hola%2C+necesito+un+presupuesto+para...&utm_source=sitio&utm_content=navbar';
    window.open(url, '_blank');
  }
}
