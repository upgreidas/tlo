import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConferenceComponent } from './components/pages/conference/conference.component';

const routes: Routes = [
  {
    path: 'conference',
    component: ConferenceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
