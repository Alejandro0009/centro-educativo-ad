import { isPlatformBrowser } from '@angular/common';
import {
  Inject,
  Injectable,
  PLATFORM_ID
} from '@angular/core';

export interface ScheduleClass {

  id: string;

  day: string;
  hour: string;

  // Puede ser un estudiante individual o un grupo
  reservationType?: 'Estudiante' | 'Grupo';

  // Aquí guardamos:
  // - nombre del estudiante
  // - o nombre del grupo
  studentName: string;

  subject: string;

  modality:
    'Presencial' | 'En línea';
}


@Injectable({
  providedIn: 'root'
})
export class ScheduleStorageService {

  private readonly STORAGE_KEY =
    'ad_staff_schedule';


  constructor(
    @Inject(PLATFORM_ID)
    private platformId: Object
  ) {}


  // =========================================================
  // OBTENER HORARIOS
  // =========================================================

  getClasses(): ScheduleClass[] {

    // Protección para SSR / Netlify
    if (!isPlatformBrowser(this.platformId)) {
      return [];
    }


    try {

      const saved =
        localStorage.getItem(
          this.STORAGE_KEY
        );


      return saved
        ? JSON.parse(saved)
        : [];

    } catch (error) {

      console.error(
        'No se pudo cargar el horario:',
        error
      );

      return [];
    }
  }


  // =========================================================
  // GUARDAR HORARIOS
  // =========================================================

  saveClasses(
    classes: ScheduleClass[]
  ): void {

    // Protección para SSR / Netlify
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }


    try {

      localStorage.setItem(
        this.STORAGE_KEY,
        JSON.stringify(classes)
      );

    } catch (error) {

      console.error(
        'No se pudo guardar el horario:',
        error
      );
    }
  }

}