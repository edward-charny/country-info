import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryDetailsComponent } from './components/country-details/country-details.component';
import { CountryListComponent } from './components/country-list/country-list.component';

const routes: Routes = [
  { path: 'details', children: [
    { path: ':code', component: CountryDetailsComponent }
  ]},
  { path: '', component: CountryListComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
