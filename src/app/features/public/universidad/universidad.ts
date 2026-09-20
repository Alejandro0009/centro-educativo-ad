import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-universidad',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './universidad.html',
  styleUrl: './universidad.scss'
})
export class Universidad {}