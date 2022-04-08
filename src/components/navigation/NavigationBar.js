import '../../sass/layout/navigation-bar.scss'
import { Link } from 'react-router-dom'
import { Fragment, useEffect, useState } from 'react'
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
      if (window.innerWidth > 767) {
        setMobileNavOpen(false)
        setDesktopNavOpen(true)
      } else {
        setDesktopNavOpen(false)
        setMobileNavOpen(true)
      }
    }

    window.addEventListener('resize', checkViewportWidth)

    return () => {
      window.removeEventListener('resize', checkViewportWidth)
    }
  }, [])

  return (
    <Fragment>
      {isMobileNavOpen && <MobileNavigation></MobileNavigation>}
      {isDestopNavOpen && <DesktopNavigation></DesktopNavigation>}
    </Fragment>
  )
}

export default NavigationBar
