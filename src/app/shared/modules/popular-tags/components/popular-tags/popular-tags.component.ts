import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PopularTagsService } from '../../popular-tags.service';

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrls: ['./popular-tags.component.scss']
})
export class PopularTagsComponent implements OnInit {

  popularTags$: Observable<string[]>

  constructor(
    private popularTagsService: PopularTagsService
  ) { }

  ngOnInit(): void {
    this.popularTags$ = this.popularTagsService.getAll();
  }

}
