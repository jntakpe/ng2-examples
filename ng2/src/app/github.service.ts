import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';

@Injectable()
export class GithubService {

  constructor(private http: Http) {
  }

  findReposForUser(username: string): Observable<any> {
    return this.http.get(`http://api.github.com/users/${username}/repos`)
      .map(res => res.json());
  }
}
