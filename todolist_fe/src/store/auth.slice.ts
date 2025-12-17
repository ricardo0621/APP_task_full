// reducer y los acciones para autenticacion
import authService from "../services/auth.service";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { LoginRequest } from "../interfaces/auth.interface";
import type { User } from "../interfaces/auth.interface";



interface AuthState {
    user: User | null,
    token: string | null,
    isAuthenticated: boolean,
    loading: boolean,
    error: string | null 
}

const initialState: AuthState = {
    user: null,
    token: null,
    isAuthenticated: false,
    loading: false,
    error: null 
}

export const logout = createAsyncThunk(
    "auth/logout",
    async () => {
        try{
         await authService.logout();
           
        } catch (error) {
           console.log(error);
        }
    }
)


export const LoginUser = createAsyncThunk(
    "auth/login",
    async (credentials: LoginRequest, { rejectWithValue }: any) => {//validar si se debe colocar : any en el rejectWithValue
        try {
            const response = await authService.login(credentials);
            console.log(response.data);
            return response.data;
        } catch (error) {
            return rejectWithValue(error);
        }
})

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(LoginUser.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(LoginUser.fulfilled, (state, action) => {
            state.loading = false
            state.user = action.payload.user
            state.token = action.payload.token
            state.isAuthenticated = true
        })
        builder.addCase(LoginUser.rejected, (state, action) => {
            state.loading = false
            state.isAuthenticated = false
            state.error = action.payload as string
        })
    },
})

export default authSlice.reducer