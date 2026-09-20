import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  NEWS,
  NewsArticle
} from './data/news.data';


@Component({
  selector: 'app-news',
  standalone: true,

  imports: [
    RouterLink
  ],

  templateUrl: './news.html',
  styleUrl: './news.scss'
})


export class News {

  /**
   * Noticias visibles en la página.
   *
   * 1. Solo muestra noticias publicadas.
   * 2. Ordena de la más reciente a la más antigua por ID.
   * 3. Muestra un máximo de 3 publicaciones.
   */
  readonly news: NewsArticle[] = NEWS
    .filter(article => article.published)
    .sort((a, b) => b.id - a.id)
    .slice(0, 3);

}