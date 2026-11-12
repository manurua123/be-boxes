// src/app/core/services/content.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private http = inject(HttpClient);
  private content: any = {};

  // Este método cargará el JSON antes de que la app inicie
  loadContent(): Promise<void> {
    return firstValueFrom(this.http.get('/assets/content.json'))
      .then((data) => {
        this.content = data;
      })
      .catch((error) => {
        console.error('Error cargando los textos', error);
      });
  }

  get(key: string): string {
    const value = key.split('.').reduce((obj, i) => (obj ? obj[i] : null), this.content);
    return value !== null && value !== undefined ? value : `[Falta: ${key}]`;
  }
}
