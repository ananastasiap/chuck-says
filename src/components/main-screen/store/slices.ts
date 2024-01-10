import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
  currentJoke: "",
}

export const mainScreenSlice = createSlice({
  name: "mainScreen",
  initialState,
  reducers: {
    setCurrentJoke: (state, action) => {
      state.currentJoke = action.payload
    },
  },
})

export const { setCurrentJoke } = mainScreenSlice.actions

export default mainScreenSlice.reducer
