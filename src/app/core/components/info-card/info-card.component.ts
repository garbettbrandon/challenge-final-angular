import { Component, input } from '@angular/core';
import { Episode } from '../../interfaces/episodes.interface';

@Component({
  selector: 'info-card',
  imports: [],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.css',
})
export class InfoCardComponent {
  episode = input.required<Episode>();
}
