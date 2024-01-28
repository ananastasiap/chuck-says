import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { toggleDarkTheme, toggleText } from "../../store/slices"
import styles from "./button.module.scss"

const Button: React.FC = () => {
  const dispatch = useAppDispatch()
  const textButton = useAppSelector((state) => state.mainScreen.textButton)

  const handleThemeToggle = () => {
    dispatch(toggleDarkTheme())
    dispatch(toggleText())
  }

  return (
    <button className={styles.button} onClick={handleThemeToggle}>
      {textButton}
    </button>
  )
}

export default Button
