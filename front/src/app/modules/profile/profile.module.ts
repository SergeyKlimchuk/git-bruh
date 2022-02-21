import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ProfileSidebarComponent } from './profile-sidebar/profile-sidebar.component';
import { GeneralSectionComponent } from './sections/general-section/general-section.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SecuritySectionComponent } from './sections/security-section/security-section.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfileComponent,
    ProfileSidebarComponent,
    GeneralSectionComponent,
    SecuritySectionComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule { }
