import { useAppSelector } from "../../../../app/hooks"

export interface IDarkWhite {
  children: React.ReactNode
}

const DarkLight: React.FC<IDarkWhite> = (props) => {
  const { children } = props

  const DarkTheme = useAppSelector((state) => state.mainScreen.darkTheme)

  return <div className={DarkTheme ? "dark" : "light"}>{children}</div>
}

export default DarkLight
