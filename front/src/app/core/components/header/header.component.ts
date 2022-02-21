import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { logOut } from '../../state/identity.actions';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    authenticated$: Observable<boolean>;

    constructor(private store: Store<AppState>) {
        this.authenticated$ = this.store.select(
            (x) => x.identity.authenticated || false
        );
    }

    logout() {
        this.store.dispatch(logOut());
    }
}
