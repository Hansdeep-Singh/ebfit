import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { TrialComponent } from './trial/trial.component';
import { SummerComponent } from './summer/summer.component';
import { StuckComponent } from './stuck/stuck.component';
import { LeaseComponent } from './lease/lease.component';

const routes: Routes = [{ path: '', component: HomeComponent, pathMatch: 'full' },
{
  path: 'services',
  component: ServicesComponent,
}, {
  path: 'trial',
  component: TrialComponent,
}, {
  path: 'challenge',
  component: SummerComponent,
}, {
  path: 'training',
  component: StuckComponent,
}, {
  path: 'services',
  component: ServicesComponent,
}, {
  path: 'lease',
  component: LeaseComponent,
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
