import { Component, inject, input, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PodcastService } from '../../services/podcast.service';
import { Episode } from '../../interfaces/episodes.interface';

@Component({
  selector: 'episodes-list',
  imports: [RouterLink],
  templateUrl: './episodes-list.component.html',
  styleUrl: './episodes-list.component.css',
})
export class EpisodesListComponent {
  episodes = input.required<Episode[]>();
  activatedRoute = inject(ActivatedRoute);

  podcastId = this.activatedRoute.snapshot.paramMap.get('podcastId') || '';
}
