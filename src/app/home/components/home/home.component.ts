import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  apiUrl = "/articles"
  path: string;
  tagName: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.path = this.route.snapshot.routeConfig.path;
    if (this.path === "feed") {
      this.apiUrl = "/articles/feed"
    }
    this.route.params.subscribe(
      (routeParams) => {
        if (routeParams.slug){
          console.log(routeParams.slug);
          
          this.tagName = routeParams.slug;
          this.apiUrl = `/articles?tag=${this.tagName}`;
        }
      }
    )
    
    // ? this.apiUrl = "/articles/feed" : "/articles";
  }

}
