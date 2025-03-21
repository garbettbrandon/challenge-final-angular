import { Component, input } from '@angular/core';
import { Entry } from '../../interfaces/podcast.interface';

@Component({
  selector: 'description-card',
  imports: [],
  templateUrl: './description-card.component.html',
  styleUrl: './description-card.component.css',
})
export class DescriptionCardComponent {
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
  getDesc() {
    return this.podcast()['summary'];
  }
}
