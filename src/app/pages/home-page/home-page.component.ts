import { Component, inject, linkedSignal, signal } from '@angular/core';
import { PodcastCardComponent } from '../../core/components/podcast-card/podcast-card.component';
import { PodcastService } from '../../core/services/podcast.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';

@Component({
  selector: 'app-home-page',
  imports: [PodcastCardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  podcastService = inject(PodcastService);
  query = signal('');

  podcastResource = rxResource({
    request: () => ({}),
    loader: ({ request }) => this.podcastService.getTopPodcasts(),
  });

  searchResource = rxResource({
    request: () => ({ query: this.query() }),
    loader: ({ request }) => {
      if (!request.query) return of([]);
      return this.podcastService.searchPodcast(request.query);
    },
  });
}
