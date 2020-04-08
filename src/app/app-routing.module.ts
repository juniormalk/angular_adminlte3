import { HomeComponent } from './components/content/home/home.component';
import { TenantsComponent } from './components/content/tenants/tenants.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentComponent } from './components/content/content.component';

const routes: Routes = [
  {path: '',
    component: ContentComponent,
    children: [
      {
        path: 'tenants',
        component: TenantsComponent
      },
      {
        path: '',
        component: HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
