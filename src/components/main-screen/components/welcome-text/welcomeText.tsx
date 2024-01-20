// import cn from "classnames"
import styles from "./welcomeText.module.scss"

const WelcomeText: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.welcomeText}>Click on Chuck</h1>
      <p className={styles.text}>
        <span>Warning</span>: jokes can be bad and strange. Sorry!
      </p>
    </div>
  )
}

export default WelcomeText
