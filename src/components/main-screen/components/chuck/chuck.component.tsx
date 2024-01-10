import axios from "axios"
import { useAppDispatch } from "../../../../app/hooks"
import { setCurrentJoke } from "../../store/slices"

const Chuck: React.FC = () => {
  const dispatch = useAppDispatch()

  const fetchChuckJoke = async () => {
    try {
      const response = await axios.get(
        "https://api.chucknorris.io/jokes/random",
      )
      dispatch(setCurrentJoke(response.data.value))
    } catch (error) {
      console.error("Error fetching Chucks joke:", error)
    }
  }

  return <div onClick={fetchChuckJoke}>CHUCK</div>
}

export default Chuck
