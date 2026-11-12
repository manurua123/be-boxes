// Título, descripción y URL canónica de cada página.
// Se aplican en cada navegación (y durante el prerender), así el HTML
// estático de /hogar/ y /construccion/ ya sale con sus propios datos.

export const SITE_URL = 'https://boxes.berlin.com.ar';

export interface SeoData {
  title: string;
  description: string;
  /** Ruta canónica, con barra final (ej. '/hogar/'). */
  path: string;
}

export const SEO_HOME: SeoData = {
  title: 'BE—BOXES® · Arreglos, instalaciones y mejoras para tu casa y tu obra · La Plata',
  description:
    'Arreglos, instalaciones y mejoras para tu casa y tu obra en La Plata. Presupuesto cerrado y garantía escrita.',
  path: '/',
};

export const SEO_HOGAR: SeoData = {
  title:
    'BE—BOXES® · Servicio al hogar · Mantenimiento, reparaciones y puesta a punto · La Plata',
  description:
    'Mantenimiento, reparaciones, regulación de aberturas, puesta a punto y seguridad para viviendas, edificios y consorcios en La Plata. Presupuesto cerrado y garantía escrita.',
  path: '/hogar/',
};

export const SEO_CONSTRUCCION: SeoData = {
  title:
    'BE—BOXES® · Servicio a la construcción · Arquitectura, herrería, carpintería y aberturas · La Plata',
  description:
    'Arquitectura, dirección de obra, herrería, carpintería, aberturas, decks y señales débiles para obras en La Plata. Un solo equipo, presupuesto cerrado.',
  path: '/construccion/',
};
