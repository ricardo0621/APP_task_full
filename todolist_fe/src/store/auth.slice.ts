// reducer y los acciones para autenticacion
import authService from "../services/auth.service";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { LoginRequest } from "../interfaces/auth.interface";


export const LoginUser = createAsyncThunk("auth/login",
    async (credentials: LoginRequest, { rejectWithValue }) => {//validar si se debe colocar : any en el rejectWithValue
        try {
            const response = await authService.login(credentials);
            return response.data;
        } catch (error) {
            return rejectWithValue(error);
        }
})

const authSlice = createSlice({
    name: "auth",
    initialState:{
        user: null,
    },
    reducers: {
        
    },
})

export default authSlice.reducer