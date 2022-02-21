import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { loadCurrentUser } from './core/state/identity.actions';
import { AppState } from './state/app.state';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    constructor(
        private iconRegistry: MatIconRegistry,
        private domSanitizer: DomSanitizer,
        private store: Store<AppState>
    ) {
        this.registerCusomIcons();
    }

    private registerCusomIcons() {
        this.iconRegistry.addSvgIcon(
            'git',
            this.domSanitizer.bypassSecurityTrustResourceUrl(
                '/assets/images/ico.svg'
            )
        );
    }

    ngOnInit() {
        this.store.dispatch(loadCurrentUser());
    }
}
