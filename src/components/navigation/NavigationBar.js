import '../../sass/layout/navigation-bar.scss'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import MobileNavigation from './MobileNavigation'
import DesktopNavigation from './DesktopNavigation'

const NavigationBar = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false)
  const [isDestopNavOpen, setDesktopNavOpen] = useState(false)

  useEffect(() => {}, [])

  return (
    <div className="navigation-bar">
      <Link className="navigation__logo-box" to="/">
        <img src="" alt="My Logo"></img>
      </Link>
      {isMobileNavOpen && <MobileNavigation></MobileNavigation>}
      {isDestopNavOpen && <DesktopNavigation></DesktopNavigation>}
    </div>
  )
}

export default NavigationBar
