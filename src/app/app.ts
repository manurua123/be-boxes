import { Component, inject, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs/operators';
import { Title, Meta } from '@angular/platform-browser';
import { ContentService } from './services/content.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss',
})
export class App {

  private titleService = inject(Title);
  private metaService = inject(Meta);
  private contentService = inject(ContentService);


  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller,
  ) {}

  ngOnInit() {



    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
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
}
