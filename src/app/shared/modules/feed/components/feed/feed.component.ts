import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ArticleService } from 'src/app/shared/services/ArticleService';
import { GetFeedResponseInterface } from 'src/app/shared/types/GetFeedResponse.interface';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, OnChanges {

  @Input("apiUrl") apiUrlProps: string;

  articles$: Observable<GetFeedResponseInterface>

  constructor(
    private articleService: ArticleService
  ) { }

  ngOnInit(): void {
    this.fetchData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const isApiUrlChanged =!changes.apiUrlProps.firstChange && changes.apiUrlProps.currentValue !== changes.apiUrlProps.previousValue;

    if (isApiUrlChanged) {
      this.fetchData();
    }
  }

  fetchData(): void {
    this.articles$ = this.articleService.getAll(this.apiUrlProps);
  }

}
