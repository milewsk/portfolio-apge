import { createSlice } from '@reduxjs/toolkit'

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    areLinksOpen: false,
  },
  reducers: {
    openLinks(state) {
      state.areLinksOpen = true
    },
    closeLinks(state) {
      state.areLinksOpen = false
    },
  },
})
