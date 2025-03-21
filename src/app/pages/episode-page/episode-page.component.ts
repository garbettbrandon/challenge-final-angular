import { Component, inject, Pipe } from '@angular/core';
import { EpisodeCardComponent } from '../../core/components/episode-card/episode-card.component';
import { InfoCardComponent } from '../../core/components/info-card/info-card.component';
import { ActivatedRoute } from '@angular/router';
import { PodcastService } from '../../core/services/podcast.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { Episode } from '../../core/interfaces/episodes.interface';

@Component({
  selector: 'app-episode-page',
  imports: [EpisodeCardComponent, InfoCardComponent],
  templateUrl: './episode-page.component.html',
  styleUrl: './episode-page.component.css',
})
export class EpisodePageComponent {
  activatedRoute = inject(ActivatedRoute);
  podcastService = inject(PodcastService);

  // Obtén el podcastId y episodeId desde los parámetros de la ruta
  podcastId = this.activatedRoute.snapshot.paramMap.get('podcastId') || '';
  episodeId = this.activatedRoute.snapshot.paramMap.get('episodeId') || '';

  // Usa ambos IDs en el recurso
  episodeResource = rxResource({
    request: () => ({ podcastId: this.podcastId, episodeId: this.episodeId }),
    loader: ({ request }) => {
      if (!request.podcastId || !request.episodeId) {
        // Return an empty Observable of type Episode to match the expected type
        return of(null as unknown as Episode);
      }
      return this.podcastService.getEpisodeByPodcastAndEpisodeId(
        request.podcastId,
        request.episodeId
      );
    },
  });
}
