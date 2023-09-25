import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { SoftwareComponent } from './software/software.component';
import { SmartFacilityComponent } from './smart-facility/smart-facility.component';
import { SecurityComponent } from './security/security.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { ProjectsComponent } from './projects/projects.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { DatacenterComponent } from './datacenter/datacenter.component';
import { CloudComponent } from './cloud/cloud.component';
import { WolloSCRComponent } from './projects/wollo-scr/wollo-scr.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'home', component: LandingPageComponent },
  { path: 'enterprise', component: EnterpriseComponent },
  { path: 'software', component: SoftwareComponent },
  { path: 'facilities', component: SmartFacilityComponent },
  { path: 'security', component: SecurityComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'consultants', component: ConsultationComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'trainings', component: TrainingsComponent },
  { path: 'data-center', component: DatacenterComponent },
  { path: 'cloud', component: CloudComponent },
  { path: 'projects/wollo-smart-classroom', component: WolloSCRComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
