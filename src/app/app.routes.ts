import { Routes } from '@angular/router';
import { TestResolver } from './test/test.resolver';

export const routes: Routes = [
  {
    path: '**',
    loadComponent: () => import('./test/test.component').then(m => m.TestComponent),
    resolve: { testData: TestResolver }
  }
];
