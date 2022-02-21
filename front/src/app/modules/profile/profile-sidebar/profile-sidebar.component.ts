import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-profile-sidebar',
    templateUrl: './profile-sidebar.component.html',
    styleUrls: ['./profile-sidebar.component.scss'],
})
export class ProfileSidebarComponent implements OnInit {
    sections: { icon: string; label: string; route: string }[] = [
        {
            icon: 'person',
            label: 'General info',
            route: 'general',
        },
        {
            icon: 'security',
            label: 'Security',
            route: 'security',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
