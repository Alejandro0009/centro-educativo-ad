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

  readonly news: NewsArticle[] = NEWS
    .filter(article => article.published)
    .sort((a, b) => b.id - a.id);

}