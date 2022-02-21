import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { GeneralSectionComponent } from './sections/general-section/general-section.component';
import { SecuritySectionComponent } from './sections/security-section/security-section.component';

const routes: Routes = [
    {
        path: '',
        component: ProfileComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'general',
            },
            {
                path: 'general',
                component: GeneralSectionComponent,
            },
            {
                path: 'security',
                component: SecuritySectionComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProfileRoutingModule {}
