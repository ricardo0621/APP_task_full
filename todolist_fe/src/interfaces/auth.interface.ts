

export interface LoginRequest {
    email : string;
    password : string;
}

export interface User {
    id : string;
    email : string;
    password : string;
}

export interface LoginResponse {
    message : string;
    data : string;
}

