import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { ErrorService } from './error.service';

export const ErrorResolver: ResolveFn<any> = () => {
  const errorService = inject(ErrorService);

  return errorService.getSomeData().subscribe();
}
