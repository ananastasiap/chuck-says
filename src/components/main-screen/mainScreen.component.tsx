import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import Chuck from "./components/chuck"
import Joke from "./components/joke"
import WelcomeText from "./components/welcome-text"
import {
  hideBlockWithJoke,
  showBlockWithJoke,
  toggleDarkTheme,
} from "./store/slices"
import DarkLight from "./components/dark-white"

const MainScreen: React.FC = () => {
  const state = useAppSelector((state) => state.mainScreen)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (state.currentJoke) {
      dispatch(showBlockWithJoke())

      const timeOfShowing = setTimeout(() => {
        dispatch(hideBlockWithJoke())
      }, 100000)

      return () => clearTimeout(timeOfShowing)
    }
  }, [state.currentJoke, dispatch])

  const handleThemeToggle = () => {
    dispatch(toggleDarkTheme())
    console.log("toggleDarkTheme")
  }

  return (
    <DarkLight>
      {state.displayJoke && <Joke />}
      <Chuck />
      <WelcomeText />
      <button onClick={handleThemeToggle}>Toggle</button>
    </DarkLight>
  )
}

export default MainScreen
