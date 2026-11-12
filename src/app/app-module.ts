import { APP_INITIALIZER, NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './components/00_navbar/navbar';
import { Home } from './components/01_home/home';
import { Metodo } from './components/02_metodo/metodo';
import { Equipo } from './components/05_equipo/equipo';
import { Mantenimiento } from './components/06_mantenimiento/mantenimiento';
import { Garantia } from './components/07_garantia/garantia';
import { Contacto } from './components/08_contacto/contacto';
import { Footer } from './components/09_footer/footer';
import { Box1Component } from './components/03_box1/box1.component';
import { Box2Component } from './components/04_box2/box2.component';
import { ContentPipe } from './services/content.pipe';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MiModalComponent } from './components/mi-modal/mi-modal.component';

import { provideHttpClient, withFetch } from '@angular/common/http';

import { ContentService } from './services/content.service';
export function initApp(contentService: ContentService) {
  return () => contentService.loadContent();
}

@NgModule({
  declarations: [
    App,
    Navbar,
    Home,
    Metodo,
    Box1Component,
    Box2Component,
    Equipo,
    Mantenimiento,
    Garantia,
    Contacto,
    Footer,
    ContentPipe,
    MiModalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MatDialogModule, MatButtonModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),

    provideHttpClient(withFetch()),
    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      deps: [ContentService],
      multi: true,
    },


  ],
  bootstrap: [App],
})
export class AppModule {}
