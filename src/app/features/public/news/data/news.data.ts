// ============================================================================
// NOTICIAS · CENTRO EDUCATIVO AD
//
// Este es el único archivo que necesitas editar para:
// - Agregar una noticia
// - Cambiar textos
// - Cambiar fotografías
// - Publicar u ocultar noticias
//
// La página mostrará automáticamente un máximo de 3 noticias publicadas.
// ============================================================================


// ============================================================================
// 01 · CATEGORÍAS DISPONIBLES
// ============================================================================

export type NewsCategory =
  | 'Centro AD'
  | 'ECOEMS'
  | 'Universidad'
  | 'Inglés AD';



// ============================================================================
// 02 · ESTRUCTURA DE UNA NOTICIA
// ============================================================================

export interface NewsArticle {

  // Número único.
  // Entre mayor sea el ID, más reciente se considera la noticia.
  id: number;

  // Título principal.
  title: string;

  // Resumen corto que aparecerá en la página.
  excerpt: string;

  // Fecha que verá el usuario.
  date: string;

  // Categoría.
  category: NewsCategory;

  // Fotografía de la noticia.
  // Es opcional: si no hay imagen, el diseño mostrará el fondo AD.
  image?: string;

  // true  = aparece en la página
  // false = permanece guardada pero no aparece
  published: boolean;
}



// ============================================================================
// 03 · NOTICIAS
//
// IMPORTANTE:
//
// - Agrega las noticias nuevas aquí.
// - Usa un ID mayor para cada nueva publicación.
// - No necesitas borrar noticias antiguas.
// - La página únicamente mostrará las 3 publicaciones más recientes.
// ============================================================================

export const NEWS: NewsArticle[] = [


  // ==========================================================================
  // NOTICIA 01 · SUMMER 2026
  // ==========================================================================

  {
    id: 1,

    title: 'Finaliza nuestro Curso de Verano Summer 2026',

    excerpt:
      'Concluimos Summer 2026 agradeciendo a nuestros estudiantes y familias por su confianza, participación y compromiso durante esta edición.',

    date: '04 septiembre 2026',

    category: 'Centro AD',

    // Cuando tengas la fotografía:
    image: '/images/summer.jpg',

    published: true
  },

  {
  id: 2,

  title: 'Ya está disponible nuestro programa ECOEMS 2026–2027',

  excerpt:
    'Centro Educativo AD abre su nuevo ciclo de preparación ECOEMS 2026–2027. Conoce nuestro programa, fechas y modalidad de trabajo para acompañar a los estudiantes en su preparación para el ingreso a media superior.',

  date: '19 septiembre 2026',

  category: 'ECOEMS',

  image: '/images/ecoems.jpg',

  published: true
},


  // ==========================================================================
  // PARA AGREGAR OTRA NOTICIA, COPIA ESTA PLANTILLA
  // ==========================================================================

  /*
  {
    id: 2,

    title: 'Título de la nueva noticia',

    excerpt:
      'Escribe aquí un resumen breve de dos o tres líneas.',

    date: '20 septiembre 2026',

    category: 'ECOEMS',

    image: '/images/noticias/nombre-imagen.jpg',

    published: true
  },
  */


];