import { Component, inject, input, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PodcastService } from '../../core/services/podcast.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { EpisodesListComponent } from '../../core/components/episodes-list/episodes-list.component';
import { of } from 'rxjs';
import { DescriptionCardComponent } from '../../core/components/description-card/description-card.component';

@Component({
  selector: 'app-podcast-page',
  imports: [EpisodesListComponent, DescriptionCardComponent],
  templateUrl: './podcast-page.component.html',
  styleUrl: './podcast-page.component.css',
})
export class PodcastPageComponent {
  activatedRoute = inject(ActivatedRoute);
  podcastService = inject(PodcastService);

  podcastId = this.activatedRoute.snapshot.paramMap.get('podcastId') || '';

  podcastPageResource = rxResource({
    request: () => ({ id: this.podcastId }),
    loader: ({ request }) => this.podcastService.getPodcastById(request.id),
  });

  episodeResource = rxResource({
    request: () => ({ id: this.podcastId }),
    loader: ({ request }) => {
      if (!request.id) return of([]);
      return this.podcastService.getEpisodesByPodcastId(request.id);
    },
  });
}
