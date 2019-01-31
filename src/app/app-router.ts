import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLeagueTableComponent } from './components/league-table/league-table.component';
import { TeamsComponent } from './components/teams/teams.component';
import { FixturesComponent } from './components/fixtures/fixtures.component';

const routes: Routes = [
  { path: 'home', redirectTo: '/', pathMatch: 'full' },
  { path: 'league-table', component: DefaultLeagueTableComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'fixtures', component: FixturesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRouter {
	
}
