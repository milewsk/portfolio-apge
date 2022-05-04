import { configureStore } from '@reduxjs/toolkit'
import navigationSlice from './navigation-slice'

export default configureStore({
  reducer: {
    navigation: navigationSlice,
  },
})
