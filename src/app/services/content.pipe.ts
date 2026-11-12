// src/app/shared/pipes/content.pipe.ts
import { Pipe, PipeTransform, inject } from '@angular/core';
import { ContentService } from './content.service';

@Pipe({
  name: 'content',
  pure: true,
 standalone: false
})
export class ContentPipe implements PipeTransform {
  private contentService = inject(ContentService);

  transform(key: string): string {
    return this.contentService.get(key);
  }
}
