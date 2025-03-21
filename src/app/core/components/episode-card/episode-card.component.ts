import { Component, input } from '@angular/core';
import { Entry } from '../../interfaces/podcast.interface';
import { Episode } from '../../interfaces/episodes.interface';

@Component({
  selector: 'episode-card',
  imports: [],
  templateUrl: './episode-card.component.html',
  styleUrl: './episode-card.component.css',
})
export class EpisodeCardComponent {
  episode = input.required<Episode>();
}
