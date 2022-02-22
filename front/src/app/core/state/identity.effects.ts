import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap, tap } from 'rxjs';
import { IdentityApiService } from 'src/app/services/identity-api.service';
import {
    currentUserLoaded,
    loadCurrentUser,
    logIn,
    logOut,
    logOutSuccess,
    register,
} from './identity.actions';

@Injectable()
export class IdentityEffects {
    register$ = createEffect(() =>
        this.actions$.pipe(
            ofType(register),
            mergeMap((value) =>
                this.identityApiService.register(value).pipe(
                    map(() =>
                        logIn({
                            email: value.email,
                            password: value.password,
                        })
                    ),
                    catchError(() => EMPTY)
                )
            )
        )
    );

    logIn$ = createEffect(() =>
        this.actions$.pipe(
            ofType(logIn),
            mergeMap((request) =>
                this.identityApiService.login(request).pipe(
                    tap(() => this.router.navigate(['/'])),
                    map(() => loadCurrentUser()),
                    catchError(() => EMPTY)
                )
            )
        )
    );

    logOut$ = createEffect(() =>
        this.actions$.pipe(
            ofType(logOut),
            mergeMap(() =>
                this.identityApiService.logout().pipe(
                    map(() => logOutSuccess()),
                    catchError(() => EMPTY)
                )
            )
        )
    );

    loadCurrentUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadCurrentUser),
            mergeMap(() =>
                this.identityApiService.getCurrentUser().pipe(
                    tap(() => this.router.navigate(['/'])),
                    map((currentUser) => currentUserLoaded(currentUser)),
                    catchError(() => EMPTY)
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private identityApiService: IdentityApiService,
        private router: Router
    ) {}
}
