import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ItunesResponse } from '../interfaces/podcast.interface';
import { environment } from '../../../environments/environment';

const baseUrl = environment.baseUrl;

@Injectable({ providedIn: 'root' })
export class PodcastService {
  private http = inject(HttpClient);

  getTopPodcasts(): Observable<ItunesResponse> {
    return this.http
      .get<ItunesResponse>(
        `${baseUrl}/us/rss/toppodcasts/limit=100/genre=1310/json`
      )
      .pipe(tap(console.log));
  }
}
