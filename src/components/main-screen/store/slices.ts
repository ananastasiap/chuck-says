import { createSlice } from "@reduxjs/toolkit"
import { IMainScreenState } from "./types"

export const initialState: IMainScreenState = {
  currentJoke: "",
  displayJoke: false,
}

export const mainScreenSlice = createSlice({
  name: "mainScreen",
  initialState,
  reducers: {
    setCurrentJoke: (state, action) => {
      state.currentJoke = action.payload
    },
    showBlockWithJoke: (state) => {
      state.displayJoke = true
    },
    hideBlockWithJoke: (state) => {
      state.displayJoke = false
    },
  },
})

export const { setCurrentJoke, showBlockWithJoke, hideBlockWithJoke } =
  mainScreenSlice.actions

export default mainScreenSlice.reducer
