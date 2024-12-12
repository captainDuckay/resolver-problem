import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { TestService } from './test.service';

export const TestResolver: ResolveFn<any> = () => {
  const testService = inject(TestService);

  return testService.getSomeData().subscribe();
}
