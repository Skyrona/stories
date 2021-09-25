import { Component, Input, OnInit } from '@angular/core';
import { FavoritesService } from 'src/app/shared/services/FavoritesService';

@Component({
  selector: 'app-favorites-button',
  templateUrl: './favorites-button.component.html',
  styleUrls: ['./favorites-button.component.scss']
})
export class FavoritesButtonComponent implements OnInit {

  @Input("isFavorited") isFavoritedProps: boolean;
  @Input("favoritesCount") favoritesCountProps: number;
  @Input("articleSlug") articleSlugProps: string;

  isFavorited: boolean;
  favoritesCount: number;


  constructor(
    private favoritesService: FavoritesService
  ) { }

  ngOnInit(): void {
    this.isFavorited = this.isFavoritedProps;
    this.favoritesCount = this.favoritesCountProps;
  }

  handleLike(): void {
    console.log(this.isFavorited);
    
    if (this.isFavorited) {
      this.favoritesService.removeFromFavorites(this.articleSlugProps)
        .subscribe(res => this.favoritesCount -= 1);
    } else {
      this.favoritesService.addToFavorites(this.articleSlugProps)
        .subscribe(res => this.favoritesCount += 1);
    }

    this.isFavorited != this.isFavorited

  }

}
