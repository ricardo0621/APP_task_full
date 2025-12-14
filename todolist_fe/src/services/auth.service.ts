
import type { LoginRequest, LoginResponse, User } from "../interfaces/auth.interface";
import { axiosInstance } from "./axios.config";

const authService = {
    login: async (credentials: LoginRequest): Promise<LoginResponse> => {
        const response = await axiosInstance.post("/user/login", credentials);
        return response.data;
    },
    logout: async () => {

    },
    createUser: async () => {

    },
    updateUser: async () => {

    },
    getUser: async () => {

    },
    deleteUser: async () => {

    }
}


export default authService

