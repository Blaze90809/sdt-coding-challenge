import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  // /Users/blaze/Documents/code-projects/test-api/src/pages/api/api.module.ts
  // /Users/blaze/Documents/code-projects/test-api/src/app/app-routing.module.ts
  // loadChildren: './pages/api/api.module#ApiModule'
  loadChildren: () => import('./').then(m => m.ApiModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
