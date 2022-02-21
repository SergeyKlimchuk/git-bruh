import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { register } from 'src/app/core/state/identity.actions';
import { AppState } from 'src/app/state/app.state';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
    form: FormGroup;
    constructor(private store: Store<AppState>, fb: FormBuilder) {
        this.form = fb.group({
            firstName: ['', [Validators.required]],
            lastName: ['', [Validators.required]],
            email: ['', [Validators.required]],
            password: ['', [Validators.required]],
            passwordConfirm: ['', [Validators.required]],
        });
    }

    register() {
        this.store.dispatch(register(this.form.value));
    }
}
