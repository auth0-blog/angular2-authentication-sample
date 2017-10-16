import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { contentHeaders } from '../../common/headers';

@Injectable()
export class BackendService {
  constructor(private http: HttpClient) {}

  public signup(body) {
    return this.http
      .post('http://localhost:3001/users', body, { headers: contentHeaders })
      .share();
  }

  public login(body) {
    return this.http
      .post('http://localhost:3001/sessions/create', body, { headers: contentHeaders })
      .share();
  }

  public callApi(url) {
    return this.http
      .get(url, { responseType: 'text' })
      .share();
  }
}
