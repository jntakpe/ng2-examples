import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {GithubService} from '../github.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  repos$: Observable<string[]>;

  constructor(title: Title, private  githubService: GithubService) {
    title.setTitle("Github component");
  }

  ngOnInit() {
    this.repos$ = this.githubService.findReposForUser('jntakpe').map(repos => repos.map(r => r.name));
  }

}
