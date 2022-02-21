import { createAction, props } from '@ngrx/store';
import {
    CreateUserRequest,
    CurrentUser,
    LoginRequest,
} from 'src/app/models/dto/identity.model';

export enum IdentityActionTypes {
    REGISTER = '[Identity] Register',
    LOG_IN = '[Identity] Log in',
    LOG_OUT = '[Identity] Log out',
}

export const register = createAction(
    '[Identity] Register',
    props<CreateUserRequest>()
);

export const loadCurrentUser = createAction(
    '[Identity] Load current user'
);
export const currentUserLoaded = createAction(
    '[Identity] Current user loaded',
    props<CurrentUser>()
);

export const logIn = createAction(
    '[Identity] Log in',
    props<LoginRequest>()
);

export const logOut = createAction('[Identity] Log out');
export const logOutSuccess = createAction('[Identity] Log out success');
