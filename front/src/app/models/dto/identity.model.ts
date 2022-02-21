export interface CreateUserRequest {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
}

export interface LoginRequest {
    email: string,
    password: string,
}

export interface CurrentUser {
    id: number;
    firstName: string,
    lastName: string,
    email: string,
}
