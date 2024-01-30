import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import Chuck from "./components/chuck"
import Joke from "./components/joke"
import WelcomeText from "./components/welcome-text"
import { hideBlockWithJoke, showBlockWithJoke } from "./store/slices"
import DarkLight from "./components/dark-white"
import Button from "./components/button"
import Wrapper from "./components/wrapper"

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

  return (
    <DarkLight>
      <WelcomeText />
      <Wrapper>
        {state.displayJoke && <Joke />}
        <Chuck />
      </Wrapper>
      <Button />
    </DarkLight>
  )
}

export default MainScreen
