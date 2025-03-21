import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Entry } from '../../interfaces/podcast.interface';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'podcast-card',
  imports: [RouterLink],
  templateUrl: './podcast-card.component.html',
  styleUrl: './podcast-card.component.css',
})
export class PodcastCardComponent {
  podcast = input.required<Entry>();
  
  getPodcastName() {
    return this.podcast()['im:name'];
  }
  getPodcastArtist() {
    return this.podcast()['im:artist'];
  }
  getPodcastImage() {
    return this.podcast()['im:image'];
  }
    getPodcastId() {
    return this.podcast()['id'].attributes['im:id'];
  }
}
