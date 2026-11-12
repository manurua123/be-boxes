import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/01_home/home';
import { SEO_CONSTRUCCION, SEO_HOGAR, SEO_HOME } from './seo';

const routes: Routes = [
  { path: '', component: Home, data: { seo: SEO_HOME } },
  { path: 'construccion', component: Home, data: { seo: SEO_CONSTRUCCION } },
  { path: 'hogar', component: Home, data: { seo: SEO_HOGAR } },
  { path: 'nosotros', component: Home, data: { seo: SEO_HOME } },
  { path: 'equipo', component: Home, data: { seo: SEO_HOME } },
  { path: 'abonos', component: Home, data: { seo: SEO_HOME } },
  { path: 'contacto', component: Home, data: { seo: SEO_HOME } },
  // Rutas viejas: el 301 real lo hacen .htaccess / server.ts; esto cubre la navegación interna.
  { path: 'box1', redirectTo: 'hogar', pathMatch: 'full' },
  { path: 'box2', redirectTo: 'construccion', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
