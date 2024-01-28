import { useAppSelector } from "../../../../app/hooks"

import styles from "./joke.module.scss"

const Joke: React.FC = () => {
  const state = useAppSelector((state) => state.mainScreen)

  return (
    <div className={styles.container}>
      <h3 className={styles.joke}>{state.currentJoke}</h3>
    </div>
  )
}

export default Joke
