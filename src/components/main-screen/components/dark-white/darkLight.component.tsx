import { useEffect } from "react"
import { useAppSelector } from "../../../../app/hooks"

export interface IDarkLight {
  children: React.ReactNode
}

const DarkLight: React.FC<IDarkLight> = (props) => {
  const { children } = props
  const DarkTheme = useAppSelector((state) => state.mainScreen.darkTheme)

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", DarkTheme)
  }, [DarkTheme])

  return <>{children}</>
}

export default DarkLight
