import { Routes } from '@angular/router';
import { TestResolver } from './test/test.resolver';
import { ErrorResolver } from './error/error.resolver';

export const routes: Routes = [
  {
    path: '404',
    loadComponent: () => import('./error/error.component').then(m => m.ErrorComponent),
    resolve: { testData: ErrorResolver }
  },
  {
    path: '**',
    loadComponent: () => import('./test/test.component').then(m => m.TestComponent),
    resolve: { testData: TestResolver }
  }
];
