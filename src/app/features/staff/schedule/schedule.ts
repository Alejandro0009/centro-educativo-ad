import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import {
  ScheduleClass,
  ScheduleStorageService
} from './schedule-storage';


@Component({
  selector: 'app-schedule',
  standalone: true,

  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],

  templateUrl: './schedule.html',
  styleUrl: './schedule.scss'
})
export class Schedule {


  // =========================================================
  // DÍAS
  // =========================================================

  readonly days = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado'
  ];


  // =========================================================
  // HORARIOS
  // =========================================================

  readonly hours = [
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00'
  ];


  // =========================================================
  // CLASES REGISTRADAS
  // =========================================================

  classes: ScheduleClass[] = [];


  // =========================================================
  // MODAL
  // =========================================================

  modalOpen = false;

  selectedDay = '';
  selectedHour = '';


  // =========================================================
  // TIPO DE RESERVACIÓN
  // =========================================================

  reservationType:
    'Estudiante' | 'Grupo' = 'Estudiante';


  // =========================================================
  // DATOS
  // =========================================================

  studentName = '';

  subject = '';

  modality:
    'Presencial' | 'En línea' = 'Presencial';


  // =========================================================
  // EDICIÓN
  // =========================================================

  selectedReservationId: string | null = null;


  // =========================================================
  // CONSTRUCTOR
  // =========================================================

  constructor(
    private scheduleStorage: ScheduleStorageService
  ) {

    this.classes =
      this.scheduleStorage.getClasses();
  }


  // =========================================================
  // SABER SI ESTAMOS EDITANDO
  // =========================================================

  get editingReservation(): boolean {

    return this.selectedReservationId !== null;
  }


  // =========================================================
  // BUSCAR UNA CLASE
  // =========================================================

  getClass(
    day: string,
    hour: string
  ): ScheduleClass | undefined {

    return this.classes.find(
      item =>
        item.day === day &&
        item.hour === hour
    );
  }


  // =========================================================
  // SABER SI ESTÁ RESERVADO
  // =========================================================

  isReserved(
    day: string,
    hour: string
  ): boolean {

    return !!this.getClass(
      day,
      hour
    );
  }


  // =========================================================
  // ABRIR NUEVA RESERVACIÓN
  // =========================================================

  openReservation(
    day: string,
    hour: string
  ): void {

    // No permite doble reservación
    if (this.isReserved(day, hour)) {
      return;
    }


    // No estamos editando
    this.selectedReservationId = null;


    // Día y hora seleccionados
    this.selectedDay = day;

    this.selectedHour = hour;


    // Valores iniciales
    this.reservationType = 'Estudiante';

    this.studentName = '';

    this.subject = '';

    this.modality = 'Presencial';


    // Abrir modal
    this.modalOpen = true;
  }


  // =========================================================
  // ABRIR UNA RESERVACIÓN EXISTENTE
  // =========================================================

  openExistingReservation(
    reservation: ScheduleClass
  ): void {

    this.selectedReservationId =
      reservation.id;


    this.selectedDay =
      reservation.day;


    this.selectedHour =
      reservation.hour;


    // Reservaciones antiguas que no tengan tipo
    // se consideran Estudiante
    this.reservationType =
      reservation.reservationType
      ?? 'Estudiante';


    this.studentName =
      reservation.studentName;


    this.subject =
      reservation.subject;


    this.modality =
      reservation.modality;


    this.modalOpen = true;
  }


  // =========================================================
  // CERRAR MODAL
  // =========================================================

  closeModal(): void {

    this.modalOpen = false;


    this.selectedReservationId = null;


    this.selectedDay = '';

    this.selectedHour = '';


    this.reservationType = 'Estudiante';


    this.studentName = '';

    this.subject = '';


    this.modality = 'Presencial';
  }


  // =========================================================
  // GUARDAR RESERVACIÓN
  // =========================================================

  saveReservation(): void {

    const cleanName =
      this.studentName.trim();


    const cleanSubject =
      this.subject.trim();


    // =======================================================
    // VALIDACIÓN
    // =======================================================

    if (
      !cleanName ||
      !cleanSubject ||
      !this.selectedDay ||
      !this.selectedHour
    ) {
      return;
    }


    // =======================================================
    // EDITAR RESERVACIÓN EXISTENTE
    // =======================================================

    if (this.selectedReservationId) {

      this.classes =
        this.classes.map(
          item => {

            if (
              item.id !==
              this.selectedReservationId
            ) {
              return item;
            }


            return {

              ...item,

              reservationType:
                this.reservationType,

              studentName:
                cleanName,

              subject:
                cleanSubject,

              modality:
                this.modality

            };
          }
        );


      // AUTOGUARDADO
      this.scheduleStorage.saveClasses(
        this.classes
      );


      this.closeModal();

      return;
    }


    // =======================================================
    // EVITAR DOBLE RESERVACIÓN
    // =======================================================

    if (
      this.isReserved(
        this.selectedDay,
        this.selectedHour
      )
    ) {
      return;
    }


    // =======================================================
    // NUEVA RESERVACIÓN
    // =======================================================

    const newClass: ScheduleClass = {

      id:
        Date.now().toString() +
        '-' +
        Math.random()
          .toString(36)
          .substring(2, 9),


      day:
        this.selectedDay,


      hour:
        this.selectedHour,


      reservationType:
        this.reservationType,


      studentName:
        cleanName,


      subject:
        cleanSubject,


      modality:
        this.modality
    };


    // =======================================================
    // AGREGAR
    // =======================================================

    this.classes = [
      ...this.classes,
      newClass
    ];


    // =======================================================
    // AUTOGUARDADO
    // =======================================================

    this.scheduleStorage.saveClasses(
      this.classes
    );


    this.closeModal();
  }


  // =========================================================
  // LIBERAR ESPACIO
  // =========================================================

  deleteReservation(): void {

    if (!this.selectedReservationId) {
      return;
    }


    const confirmed =
      window.confirm(
        `¿Deseas liberar el espacio del ${this.selectedDay} a las ${this.selectedHour}?`
      );


    if (!confirmed) {
      return;
    }


    // Quitar la reservación
    this.classes =
      this.classes.filter(
        item =>
          item.id !==
          this.selectedReservationId
      );


    // AUTOGUARDADO
    this.scheduleStorage.saveClasses(
      this.classes
    );


    this.closeModal();
  }

}