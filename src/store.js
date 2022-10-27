import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './components/users/UserSlice'

export const store = configureStore({
  reducer: {
    users:usersReducer
  },
})