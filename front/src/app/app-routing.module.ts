import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./modules/landing/landing.module').then(
                (x) => x.LandingModule
            ),
    },
    {
        path: 'sign-in',
        loadChildren: () =>
            import('./modules/sign-in/sign-in.module').then(
                (x) => x.SignInModule
            ),
    },
    {
        path: 'board',
        loadChildren: () =>
            import('./modules/board/board.module').then((x) => x.BoardModule),
    },
    {
        path: 'profile',
        loadChildren: () =>
            import('./modules/profile/profile.module').then((x) => x.ProfileModule),
    },
    {
        path: '**',
        loadChildren: () =>
            import('./modules/error/error.module').then((x) => x.ErrorModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
