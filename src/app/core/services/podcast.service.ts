import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PodcastService {
  id = '';

  urlTopPodcasts = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100';
  urlSearchPodcasts = `https://itunes.apple.com/lookup?id=${this.id}&media=podcast&entity=podcastEpisode&limit=20`;

  constructor() {}
}
