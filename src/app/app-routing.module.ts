import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'registrar', pathMatch: 'full' },
  {
    path: 'registrar',
    loadChildren: () =>
      import('./views/registrar/registrar.module').then(
        (m) => m.RegistrarModule
      ),
  },
  {
    path: 'administrar',
    loadChildren: () =>
      import('./views/administrar/administrar.module').then(
        (m) => m.AdministrarModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
