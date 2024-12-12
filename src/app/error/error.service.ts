import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn:"root",
})
export class ErrorService {
  public httpClient = inject(HttpClient)
  public response = signal({})

  public getSomeData():Observable<any> {
    return this.httpClient.get('https://blablablalbatest.test/api/error-data').pipe(tap((object) => this.response.set(object)))
  }

}
