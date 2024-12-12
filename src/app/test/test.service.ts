import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn:"root",
})
export class TestService {
  public httpClient = inject(HttpClient)
  public response = signal({})

  public getSomeData():Observable<any> {
    return this.httpClient.get('https://blablablalbatest.test/api').pipe(tap((object) => this.response.set(object)))
  }

}
