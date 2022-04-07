import '../../sass/layout/navigation-bar.scss'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import MobileNavigation from './MobileNavigation'
import DesktopNavigation from './DesktopNavigation'

const NavigationBar = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false)
  const [isDestopNavOpen, setDesktopNavOpen] = useState(false)

  // first render
  useEffect(() => {
    if (window.innerWidth > 767) {
      setDesktopNavOpen(true)
    } else {
      setMobileNavOpen(true)
    }
  }, [])

  // tracking window.innerWidth
  useEffect(() => {
    const checkViewportWidth = (element) => {
      if (isMobileNavOpen && window.innerWidth > 767) {
        setMobileNavOpen(false)
        setDesktopNavOpen(true)
      }
    }

    window.addEventListener('resize', checkViewportWidth)

    return () => {
      window.removeEventListener('resize', checkViewportWidth)
    }
  }, [])

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
