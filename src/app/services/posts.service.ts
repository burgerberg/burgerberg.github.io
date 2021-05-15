import { Injectable } from '@angular/core';
import type { RawPost } from './posts';
import rawPost from './rawPost';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  getById(id: number): Promise<RawPost> {
    // TODO: Implementar a transformação para árvore de comentários

    if (id !== rawPost.id) {
      return Promise.reject({status: 404, message: 'Not found'});
    }

    return new Promise((resolve) =>
      setTimeout(() =>
        resolve(rawPost as RawPost),
        2000
      )
    );
  }
}
