import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home-page/home-page.component').then(
        (m) => m.HomePageComponent
      ),
  },
  {
    path: 'podcast/:podcastId',
    loadComponent: () =>
      import('./pages/podcast-page/podcast-page.component').then(
        (m) => m.PodcastPageComponent
      ),
  },
  {
    path: 'podcast/:podcastId/episode/:episodeId',
    loadComponent: () =>
      import('./pages/episode-page/episode-page.component').then(
        (m) => m.EpisodePageComponent
      ),
  },
  { path: '**', redirectTo: '' }, // Redirige a Home si la ruta no existe
];
