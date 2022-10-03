import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchoolsComponent } from './schools/schools.component';

const routes: Routes = [
  { path: 'schools', component: SchoolsComponent },
  { path: '', redirectTo: '/schools', pathMatch: 'full' },
  { path: '**', component: SchoolsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
