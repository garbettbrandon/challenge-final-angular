import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Entry, ItunesResponse } from '../interfaces/podcast.interface';
import { environment } from '../../../environments/environment';
import { Episode, EspisodesResponse } from '../interfaces/episodes.interface';

const baseUrl = environment.baseUrl;

@Injectable({ providedIn: 'root' })
export class PodcastService {
  private http = inject(HttpClient);

  getTopPodcasts(): Observable<ItunesResponse> {
    return this.http.get<ItunesResponse>(
      `${baseUrl}/us/rss/toppodcasts/limit=100/genre=1310/json`
    );
  }

  searchPodcast(query: string): Observable<Entry[]> {
    query = query.toLowerCase();

    return this.http
      .get<ItunesResponse>(
        `${baseUrl}/us/rss/toppodcasts/limit=100/genre=1310/json`
      )
      .pipe(
        map(({ feed }) =>
          feed.entry.filter((entry) =>
            entry['im:name'].label.toLowerCase().includes(query)
          )
        )
      );
  }

  getPodcastById(id: string): Observable<Entry> {
    return this.http
      .get<ItunesResponse>(
        `${baseUrl}/us/rss/toppodcasts/limit=100/genre=1310/json`
      )
      .pipe(
        map(({ feed }) => {
          const podcast = feed.entry.find(
            (entry) => entry.id.attributes['im:id'] === id
          );
          if (!podcast) {
            throw new Error(`Podcast with ID ${id} not found`);
          }
          return podcast;
        })
      );
  }

  getEpisodesByPodcastId(id: string) {
    return this.http
      .get<EspisodesResponse>(`${baseUrl}/lookup`, {
        params: {
          id: id,
          media: 'podcast',
          entity: 'podcastEpisode',
          limit: '20',
        },
      })
      .pipe(
        map(({ results }) => results),
        tap((episodes) => {
          if (!episodes.length) {
            throw new Error(`Episodes for podcast with ID ${id} not found`);
          }
        })
      );
  }

  getEpisodeByPodcastAndEpisodeId(
    podcastId: string,
    episodeId: string
  ): Observable<Episode> {
    return this.http
      .get<EspisodesResponse>(`${baseUrl}/lookup`, {
        params: {
          id: podcastId,
          media: 'podcast',
          entity: 'podcastEpisode',
          limit: '20',
        },
      })
      .pipe(
        map(({ results }) => {
          const episode = results.find(
            (ep) => ep.trackId === parseInt(episodeId, 10)
          );
          if (!episode) {
            throw new Error(
              `Episode with ID ${episodeId} not found in podcast ${podcastId}`
            );
          }
          return episode;
        })
      );
  }
}
