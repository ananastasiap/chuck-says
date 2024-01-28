import { createSlice } from "@reduxjs/toolkit"
import { IMainScreenState } from "./types"

export const initialState: IMainScreenState = {
  currentJoke: "",
  displayJoke: false,
  darkTheme: false,
  textButton: "dark",
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
    toggleDarkTheme: (state) => {
      state.darkTheme = !state.darkTheme
    },
    toggleText: (state) => {
      state.textButton = state.textButton === "dark" ? "light" : "dark"
    },
  },
})

export const {
  setCurrentJoke,
  showBlockWithJoke,
  hideBlockWithJoke,
  toggleDarkTheme,
  toggleText,
} = mainScreenSlice.actions

export default mainScreenSlice.reducer
