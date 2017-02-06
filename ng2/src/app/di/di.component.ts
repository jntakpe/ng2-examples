import {Component, OnInit} from '@angular/core';
import {GithubService} from '../github.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-di',
  template:`
    <h1>Dependency injection</h1>
    <ul>
      <li *ngFor="let name of reposNames$ | async">{{name}}</li>
    </ul>
  `
})
export class DiComponent implements OnInit {
  reposNames$: Observable<string>;

  constructor(private githubService: GithubService) {
  }

  ngOnInit(): void {
    this.reposNames$ = this.githubService.findReposForUser('jntakpe').map(r => r.map(repo => repo.name));
  }
}
