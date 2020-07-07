import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { EventCreateComponent } from './components/event-create/event-create.component';

const routes: Routes = [  
  {path: '', component:HomeComponent},
  {path: 'admin', component:AdminComponent},
  {path: 'eventCreation', component:EventCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
