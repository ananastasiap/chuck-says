import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import Chuck from "./components/chuck"
import Joke from "./components/joke"
import WelcomeText from "./components/welcome-text"
import { hideBlockWithJoke, showBlockWithJoke } from "./store/slices"

const MainScreen: React.FC = () => {
  const state = useAppSelector((state) => state.mainScreen)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (state.currentJoke) {
      dispatch(showBlockWithJoke())

      const timeOfShowing = setTimeout(() => {
        dispatch(hideBlockWithJoke())
      }, 5000)

      return () => clearTimeout(timeOfShowing)
    }
  }, [state.currentJoke, dispatch])

  return (
    <div>
      {state.displayJoke && <Joke />}
      <Chuck />
      <WelcomeText />
    </div>
  )
}

export default MainScreen
