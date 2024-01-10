import Chuck from "./components/chuck"
import Joke from "./components/joke"
import WelcomeText from "./components/welcome-text"

const MainScreen: React.FC = () => {
  return (
    <div>
      <Joke />
      <Chuck />
      <WelcomeText />
    </div>
  )
}

export default MainScreen
