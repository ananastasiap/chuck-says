import Chuck from "./components/chuck"
import Joke from "./components/chuck/joke"

const MainScreen: React.FC = () => {
  return (
    <div>
      <Joke />
      <Chuck />
    </div>
  )
}

export default MainScreen
