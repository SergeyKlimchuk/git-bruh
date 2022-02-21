import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
    {
        path: 'auth',
        component: AuthComponent,
    },
    {
        path: 'registration',
        component: RegistrationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SignInRoutingModule {}
