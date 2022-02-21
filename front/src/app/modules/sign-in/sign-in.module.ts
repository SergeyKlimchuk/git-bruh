import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInRoutingModule } from './sign-in-routing.module';
import { AuthComponent } from './auth/auth.component';
import { RegistrationComponent } from './registration/registration.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [AuthComponent, RegistrationComponent],
    imports: [
        CommonModule,
        SignInRoutingModule,
        SharedModule,
        ReactiveFormsModule,
    ],
})
export class SignInModule {}
