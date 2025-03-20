import { Component, inject } from '@angular/core';
import { PodcastCardComponent } from '../../core/components/podcast-card/podcast-card.component';
import { PodcastService } from '../../core/services/podcast.service';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-home-page',
  imports: [PodcastCardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  podcastService = inject(PodcastService);

  podcastResource = rxResource({
    request: () => ({}),
    loader: ({ request }) => this.podcastService.getTopPodcasts(),
  });
}
