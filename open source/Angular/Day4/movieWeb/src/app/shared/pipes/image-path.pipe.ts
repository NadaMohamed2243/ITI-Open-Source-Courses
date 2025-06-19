import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagePath'
})
export class ImagePathPipe implements PipeTransform {
  transform(path: string | null): string {
    return path
      ? `https://image.tmdb.org/t/p/w500${path}`
      : '/images/logo.jpg';
  }

}
