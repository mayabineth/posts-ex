import { Pipe, PipeTransform } from '@angular/core';
import { Post } from './models/Post';

@Pipe({
  name: 'filterPosts',
})
export class FilterPostsPipe implements PipeTransform {
  transform(posts: Post[], filterValue: string): Post[] {
    if (filterValue.length == 0) return posts;
    else {
      return posts.filter((item) => item.title.includes(filterValue));
    }
  }
}
