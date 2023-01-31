import { configureStore } from '@reduxjs/toolkit'
import composeStatusReducer from './composeStatusSlice'
import emailReducer from './emailSlice'
import userReducer from './userSlice'
export default configureStore({
  reducer: {
    composeStatus: composeStatusReducer,
    email: emailReducer,
    user:userReducer
  },
})