import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/01_home/home';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'construccion', component: Home },
  { path: 'hogar', component: Home },
  { path: 'nosotros', component: Home },
  { path: 'equipo', component: Home },
  { path: 'abonos', component: Home },
  { path: 'contacto', component: Home },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
