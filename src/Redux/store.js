import { configureStore } from '@reduxjs/toolkit'
import bookReducer from './BookSlider'
import userReducer from './UserSlider'
export const store = configureStore({
  reducer: {book:bookReducer,user:userReducer},
})