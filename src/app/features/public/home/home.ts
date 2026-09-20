import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';


interface ServiceModality {
  id: number;
  type: string;
  title: string;
  shortDescription: string;
  description: string;
  dynamic: string;
  idealFor: string;
  howItWorks: string;
  whatsappUrl: string;
}


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

  selectedService: ServiceModality | null = null;


  readonly serviceModalities: ServiceModality[] = [

    {
      id: 1,

      type: 'Presencial',

      title: 'Regularización presencial',

      shortDescription:
        'Atención directa para reforzar materias y resolver dificultades académicas.',

      description:
        'Sesiones presenciales enfocadas en las necesidades específicas del estudiante. El trabajo puede partir de temas escolares actuales, conocimientos pendientes o preparación para evaluaciones.',

      dynamic:
        'Trabajo directo durante la sesión.',

      idealFor:
        'Estudiantes que requieren acompañamiento cercano.',

      howItWorks:
        'Revisamos qué necesita reforzar el estudiante y organizamos la sesión de acuerdo con sus temas, dudas y objetivos. Cuando es necesario, podemos realizar primero una evaluación diagnóstica.',

      whatsappUrl:
        'https://wa.me/525588357806?text=Hola%20Centro%20Educativo%20AD.%0A%0AMe%20interesa%20la%20regularización%20presencial.'
    },


    {
      id: 2,

      type: 'En línea',

      title: 'Regularización online',

      shortDescription:
        'Acompañamiento académico a distancia mediante sesiones en línea.',

      description:
        'Una alternativa para estudiantes que necesitan apoyo académico pero requieren trabajar a distancia. La viabilidad depende de la materia, edad y necesidades del estudiante.',

      dynamic:
        'Sesión académica en línea.',

      idealFor:
        'Estudiantes con facilidad para trabajar a distancia.',

      howItWorks:
        'Antes de comenzar revisamos la materia y el tipo de apoyo requerido para confirmar que la modalidad en línea sea adecuada. Posteriormente se acuerda el horario y medio de conexión.',

      whatsappUrl:
        'https://wa.me/525588357806?text=Hola%20Centro%20Educativo%20AD.%0A%0AMe%20interesa%20la%20regularización%20en%20línea.'
    },


    {
      id: 3,

      type: 'Grupal · Presencial',

      title: 'Clases grupales presenciales',

      shortDescription:
        'Trabajo con grupos pequeños en un espacio compartido de aprendizaje.',

      description:
        'Modalidad pensada para estudiantes que pueden avanzar junto con compañeros que trabajan contenidos y objetivos compatibles.',

      dynamic:
        'Grupo reducido con trabajo presencial.',

      idealFor:
        'Estudiantes con nivel y objetivos similares.',

      howItWorks:
        'Antes de integrar a un estudiante revisamos que el grupo sea adecuado para su nivel y necesidades. Esto nos permite mantener un ritmo de trabajo útil para todos los integrantes.',

      whatsappUrl:
        'https://wa.me/525588357806?text=Hola%20Centro%20Educativo%20AD.%0A%0AMe%20interesan%20las%20clases%20grupales%20presenciales.'
    },


    {
      id: 4,

      type: 'Grupal · En línea',

      title: 'Clases grupales online',

      shortDescription:
        'Sesiones compartidas a distancia cuando existe un grupo compatible.',

      description:
        'Modalidad grupal realizada en línea para estudiantes que pueden trabajar contenidos similares y mantener un ritmo académico compatible.',

      dynamic:
        'Grupo reducido conectado en línea.',

      idealFor:
        'Estudiantes autónomos con objetivos similares.',

      howItWorks:
        'La apertura y disponibilidad de un grupo depende de que existan estudiantes compatibles en nivel, materia, objetivos y horario. Antes de integrar a un alumno revisamos estas condiciones.',

      whatsappUrl:
        'https://wa.me/525588357806?text=Hola%20Centro%20Educativo%20AD.%0A%0AMe%20interesan%20las%20clases%20grupales%20en%20línea.'
    }

  ];


  openServiceModal(service: ServiceModality): void {
    this.selectedService = service;

    document.body.style.overflow = 'hidden';
  }


  closeServiceModal(): void {
    this.selectedService = null;

    document.body.style.overflow = '';
  }


  @HostListener('document:keydown.escape')
  onEscape(): void {

    if (this.selectedService) {
      this.closeServiceModal();
    }

  }

}