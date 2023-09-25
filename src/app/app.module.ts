import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { SoftwareComponent } from './software/software.component';
import { SecurityComponent } from './security/security.component';
import { SmartFacilityComponent } from './smart-facility/smart-facility.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { ProjectsComponent } from './projects/projects.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { DatacenterComponent } from './datacenter/datacenter.component';
import { CloudComponent } from './cloud/cloud.component';
import { EmailForwarderService } from './Services/email-forwarder.service';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { WolloSCRComponent } from './projects/wollo-scr/wollo-scr.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    EnterpriseComponent,
    SoftwareComponent,
    SecurityComponent,
    SmartFacilityComponent,
    AboutComponent,
    ContactComponent,
    ConsultationComponent,
    ProjectsComponent,
    TrainingsComponent,
    DatacenterComponent,
    CloudComponent,
    ConfirmationComponent,
    WolloSCRComponent,
  ],

  imports: [
    SweetAlert2Module.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [EmailForwarderService],
  bootstrap: [AppComponent]
})

export class AppModule { }
