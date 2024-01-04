import { createSlice } from "@reduxjs/toolkit"

const counterSlice=createSlice({
    name:"count",
    initialState:{
        count:0
    },
   reducers:{
        increment:(state)=>{
            state.count+=1
        },
        decrement:(state)=>{
            state.count-=1
        },
        reset:(state)=>{
            state.count=0
        },
        incrementByAmount:(state,actions)=>{
            state.count+=actions.payload
        }
   } 

})
export const {increment,decrement,reset,incrementByAmount}=counterSlice.actions
export default counterSlice.reducer