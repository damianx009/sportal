import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  getProtectedWelcomeMessage(): Promise<string> {
    return this.http.get<string>('/api/protected/hello').toPromise();
  }
}
