import { createSlice } from "@reduxjs/toolkit";



const initialState={
    legajo:'',
    nombre:'',

    }

const agenteSlice = createSlice({
    name:"agente",
    initialState,
    reducers:{
        addAgente:(state, action)=>{
        state.legajo=action.payload  
        
           },

        findAgente:(state, action)=>{
            state.nombre=action.payload
            
         
        },
    }
})

export const  {addAgente,findAgente} = agenteSlice.actions

export default agenteSlice.reducer
