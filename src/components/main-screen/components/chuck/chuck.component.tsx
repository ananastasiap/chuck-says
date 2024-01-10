import axios from "axios"
import { useAppDispatch } from "../../../../app/hooks"
import { setCurrentJoke } from "../../store/slices"
import { CHUCK_RANDOM_JOKES_API } from "../../constants"

const Chuck: React.FC = () => {
  const dispatch = useAppDispatch()

  const fetchChuckJoke = async () => {
    try {
      const response = await axios.get(CHUCK_RANDOM_JOKES_API)
      dispatch(setCurrentJoke(response.data.value))
    } catch (error) {
      console.error("Error fetching Chucks joke:", error)
    }
  }

  return (
    <div>
      <div onClick={fetchChuckJoke}>CHUCK HEAD + BODY</div>
      <div onClick={fetchChuckJoke}>CHUCK left part</div>
      <div onClick={fetchChuckJoke}>CHUCK right part</div>
      <div onClick={fetchChuckJoke}>CHUCK legs</div>
    </div>
  )
}

export default Chuck
