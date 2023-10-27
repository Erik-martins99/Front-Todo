import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadAllComponent } from './components/read-all/ReadAllComponent';
import { FinalizadosComponent } from './components/finalizados/finalizados.component';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
  {
    path: '',
    component: ReadAllComponent
  },
  {
    path: 'finisheds',
    component: FinalizadosComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'update/:id',
    component: UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
