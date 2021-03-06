import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { take, tap } from 'rxjs';
import { NotificationService } from 'src/app/services/notification.service';
import { ProfileApiService } from 'src/app/services/profile-api.service';
import { AppState } from 'src/app/state/app.state';

@Component({
    selector: 'app-general-section',
    templateUrl: './general-section.component.html',
    styleUrls: ['./general-section.component.scss'],
})
export class GeneralSectionComponent {
    form: FormGroup;

    constructor(
        private notificationService: NotificationService,
        private profileApiService: ProfileApiService,
        store: Store<AppState>,
        fb: FormBuilder
    ) {
        this.form = fb.group({
            firstName: ['', [Validators.required]],
            lastName: ['', [Validators.required]],
            bio: ['', [Validators.maxLength(250)]],
        });
        store
            .select((x) => x.identity.currentUser)
            .pipe(
                take(1),
                tap((x) => this.form.patchValue(x!!))
            )
            .subscribe();
    }

    updateGeneralInfo() {
        this.profileApiService
            .updateGeneralInfo(this.form.value)
            .pipe(
                tap(() =>
                    this.notificationService.info('Success update general info')
                )
            )
            .subscribe();
    }
}
