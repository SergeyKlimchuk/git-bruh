import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
    CreateUserRequest,
    CurrentUser,
    LoginRequest,
} from '../models/dto/identity.model';

@Injectable({
    providedIn: 'root',
})
export class IdentityApiService {
    private readonly baseApi = '/api/v1/identity';

    constructor(private http: HttpClient) {}

    register(request: CreateUserRequest) {
        return this.http.post<void>(`${this.baseApi}/register`, request);
    }

    login(request: LoginRequest) {
        const formData = new FormData();
        formData.append('email', request.email);
        formData.append('password', request.password);
        return this.http.post<void>(`${this.baseApi}/login`, formData);
    }

    getCurrentUser() {
        return this.http.get<CurrentUser>(`${this.baseApi}/user`);
    }

    logout() {
        return this.http.post<void>(`${this.baseApi}/logout`, {});
    }
}
