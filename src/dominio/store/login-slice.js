import { createSlice } from "@reduxjs/toolkit";

const initialState={

    isLoged : false
}

const LoginSlice = createSlice({
    name:'login',
    initialState,
    reducers:{
        login:(state, action)=>{
            state.isLoged=action.payload
        },

        logout:(state,action)=>{
            state.isLoged=action.payload
        }
    }
})

export const {login, logout} = LoginSlice.actions
export default LoginSlice.reducer