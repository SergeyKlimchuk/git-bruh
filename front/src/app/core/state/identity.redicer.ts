import { createReducer, on } from '@ngrx/store';
import { CurrentUser } from 'src/app/models/dto/identity.model';
import { currentUserLoaded, logOutSuccess } from './identity.actions';

export type IdentityStateType = {
    currentUser?: CurrentUser;
    authenticated: boolean;
};

const initialState: IdentityStateType = {
    authenticated: false,
};

export const identityReducer = createReducer(
    initialState,
    on(currentUserLoaded, (_, currentUser) => ({
        currentUser,
        authenticated: true,
    })),
    on(logOutSuccess, () => ({
        currentUser: undefined,
        authenticated: false,
    }))
);
