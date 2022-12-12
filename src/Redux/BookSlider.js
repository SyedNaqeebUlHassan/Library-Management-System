import { createSlice } from '@reduxjs/toolkit';
export const bookSlider=createSlice({
    name:"book",
    initialState:[],
     reducers:{
        bookData:(state,action)=>{
            const Data={
                data:action.payload.newData
            }
            state.push(Data)
        }
     }
})
export const {bookData}=bookSlider.actions
export default bookSlider.reducer