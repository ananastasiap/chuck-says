import { useAppSelector } from "../../../../app/hooks"

const Joke = () => {
  const state = useAppSelector((state) => state.mainScreen)

  return <div>{state.currentJoke}</div>
}

export default Joke
