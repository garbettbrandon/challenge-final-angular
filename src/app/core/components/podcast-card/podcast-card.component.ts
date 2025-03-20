import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Entry } from '../../interfaces/podcast.interface';

@Component({
  selector: 'podcast-card',
  imports: [RouterLink],
  templateUrl: './podcast-card.component.html',
  styleUrl: './podcast-card.component.css',
})
export class PodcastCardComponent {
  podcast = input.required<Entry>();
}
