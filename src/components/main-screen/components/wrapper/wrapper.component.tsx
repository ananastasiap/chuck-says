import styles from "./wrapper.module.scss"

export interface IWrapper {
  children: React.ReactNode
}

const Wrapper: React.FC<IWrapper> = (props) => {
  const { children } = props

  return <div className={styles.wrapper}>{children}</div>
}

export default Wrapper
