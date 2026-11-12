import { Component, inject, OnInit, DOCUMENT } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs/operators';
import { Title, Meta } from '@angular/platform-browser';
import { ContentService } from './services/content.service';
import { SEO_HOME, SeoData, SITE_URL } from './seo';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private titleService = inject(Title);
  private metaService = inject(Meta);
  private contentService = inject(ContentService);
  private document = inject(DOCUMENT);
  private route = inject(ActivatedRoute);

  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller,
  ) {}

  ngOnInit() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.applySeo();

      const path = this.router.url.split('?')[0].split('#')[0].substring(1);

      if (path && path !== '') {
        setTimeout(() => {
          this.viewportScroller.scrollToAnchor(path);
        }, 100);
      } else {
        this.viewportScroller.scrollToPosition([0, 0]);
      }
    });
  }

  /** Título, description, canonical y Open Graph/Twitter según la ruta activa. */
  private applySeo(): void {
    let r = this.route;
    while (r.firstChild) r = r.firstChild;
    const seo: SeoData = r.snapshot.data['seo'] ?? SEO_HOME;
    const url = SITE_URL + seo.path;

    this.titleService.setTitle(seo.title);
    this.metaService.updateTag({ name: 'description', content: seo.description });
    this.metaService.updateTag({ property: 'og:url', content: url });
    this.metaService.updateTag({ property: 'og:title', content: seo.title });
    this.metaService.updateTag({ property: 'og:description', content: seo.description });
    this.metaService.updateTag({ property: 'twitter:url', content: url });
    this.metaService.updateTag({ property: 'twitter:title', content: seo.title });
    this.metaService.updateTag({ property: 'twitter:description', content: seo.description });

    let canonical = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      this.document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }
}
