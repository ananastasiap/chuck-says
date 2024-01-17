import cn from "classnames"

import axios from "axios"
import { useAppDispatch } from "../../../../app/hooks"
import { setCurrentJoke } from "../../store/slices"
import { CHUCK_RANDOM_JOKES_API } from "../../constants"

import styles from "./chuck.module.scss"

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
      <div onClick={fetchChuckJoke} className={styles.container}>
        <div className={cn(styles.ear, styles.center)}></div>
        <div className={cn(styles.chuck, styles.center)}>
          <div className={styles.hat}></div>
          <div className={styles.belt}></div>
          <div className={styles.mouth}></div>
          <div className={cn(styles.hair, styles.center)}>
            <div className={styles.eye}></div>
            <div className={styles.shadowUnderEyes}></div>
            <div className={styles.beard}></div>
          </div>
          <div className={cn(styles.jacket, styles.center)}>
            <div className={styles.jacketBottom}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chuck
