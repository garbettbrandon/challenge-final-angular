import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Entry, ItunesResponse } from '../interfaces/podcast.interface';
import { environment } from '../../../environments/environment';

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
}
