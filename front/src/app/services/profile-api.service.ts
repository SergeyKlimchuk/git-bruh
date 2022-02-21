import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UpdateGeneralInfoRequest } from '../models/dto/profile.model';

@Injectable({
    providedIn: 'root',
})
export class ProfileApiService {
    private readonly baseApi = '/api/v1/profile';

    constructor(private http: HttpClient) {}

    updateGeneralInfo(request: UpdateGeneralInfoRequest) {
        return this.http.put<void>(`${this.baseApi}/general`, request);
    }
}
