import { createSlice } from '@reduxjs/toolkit';
export const userSlider=createSlice({
    name:'user',
    initialState:[],
    reducers:{
        userData:(state,action)=>{
            const Data={
                userName:action.payload.newUserName,
                password:action.payload.newPassword,
            }
            state.push(Data)
        }
    }
})
export const {userData}=userSlider.actions
export default userSlider.reducer