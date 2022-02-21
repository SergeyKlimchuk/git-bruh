import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HeaderComponent } from './core/components/header/header.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { IdentityEffects } from './core/state/identity.effects';
import { identityReducer } from './core/state/identity.redicer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
    declarations: [AppComponent, HeaderComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        StoreModule.forRoot({
            identity: identityReducer,
        }),
        EffectsModule.forRoot([IdentityEffects]),
        SharedModule,
        HttpClientModule,
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
