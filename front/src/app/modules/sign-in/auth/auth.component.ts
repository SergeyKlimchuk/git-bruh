import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { logIn } from 'src/app/core/state/identity.actions';
import { AppState } from 'src/app/state/app.state';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
    form: FormGroup;
    constructor(private store: Store<AppState>, fb: FormBuilder) {
        this.form = fb.group({
            email: ['', [Validators.required]],
            password: ['', [Validators.required]],
        });
    }

    signIn() {
        this.store.dispatch(logIn(this.form.value));
    }
}
