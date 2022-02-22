import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GeneralInfo } from '../models/dto/profile.model';

@Injectable({
    providedIn: 'root',
})
export class ProfileApiService {
    private readonly baseApi = '/api/v1/profile';

    constructor(private http: HttpClient) {}

    getGeneralInfo() {
        return this.http.get<GeneralInfo>(`${this.baseApi}/general-info`);
    }

    updateGeneralInfo(request: GeneralInfo) {
        return this.http.put<void>(`${this.baseApi}/general-info`, request);
    }
}
