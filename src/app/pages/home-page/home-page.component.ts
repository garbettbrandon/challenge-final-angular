import { Component } from '@angular/core';
import { PodcastCardComponent } from "../../core/components/podcast-card/podcast-card.component";

@Component({
  selector: 'app-home-page',
  imports: [PodcastCardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent { }
