export type NewsCategory =
  | 'Centro AD'
  | 'ECOEMS'
  | 'Universidad'
  | 'Inglés AD';


export interface NewsArticle {
  id: number;

  title: string;
  excerpt: string;

  date: string;
  month: string;
  year: number;

  category: NewsCategory;

  image?: string;

  published: boolean;
}


export const NEWS: NewsArticle[] = [

  /*
  =========================================================
  PLANTILLA PARA NUEVAS NOTICIAS

  Duplica este bloque cada vez que quieras publicar algo.
  =========================================================

  {
    id: 1,

    title: 'Título de la noticia',

    excerpt:
      'Descripción breve de la publicación.',

    date: '06 septiembre 2026',

    month: 'Septiembre',

    year: 2026,

    category: 'Centro AD',

    image: '/images/noticias/ejemplo.jpg',

    published: true
  }

  */
 {
  id: 1,

  title: 'Finaliza nuestro Curso de Verano Summer 2026',

  excerpt:
    'Concluimos una nueva edición de Summer 2026 agradeciendo profundamente a nuestros estudiantes y familias por su confianza, participación y compromiso. Durante el cierre, algunos alumnos destacados recibieron un regalo especial como reconocimiento a su esfuerzo y constancia. Muy pronto estaremos compartiendo información sobre nuestros próximos grupos y nuevas actividades en Centro Educativo AD.',

  date: '04 septiembre 2026',

  month: 'Septiembre',

  year: 2026,

  category: 'Centro AD',

  published: true
}

];