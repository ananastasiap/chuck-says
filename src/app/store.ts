import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import mainScreenReducer from "../components/main-screen/store/slices"

export const store = configureStore({
  reducer: {
    mainScreen: mainScreenReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
