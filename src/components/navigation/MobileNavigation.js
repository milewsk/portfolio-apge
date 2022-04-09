import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../sass/components/navigation/mobile-nav.scss'
import my_logo from '../../img/logo/main-logo.png'
import classNames from 'classnames'
import MoblieLinks from './MobileLinks'

const MobileNavigation = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false)

  const active = classNames('navigation-mobile__menu', {
    'navigation-mobile__menu--open': isMobileNavOpen,
  })

  // reverse state
  const openMobileNavHandler = () => {
    setMobileNavOpen((isMobileNavOpen) => !isMobileNavOpen)
  }

  return (
    <Fragment>
      <div className="navigation-mobile">
        <div className="navigation-mobile__logo-box">
          <Link to="/">
            <img
              src={my_logo}
              alt="Logo"
              className="navigation-mobile__logo"
            ></img>
          </Link>
        </div>
        <button
          aria-label="Toggle Mobile Menu Button"
          onClick={openMobileNavHandler}
          className={active}
        >
          <span className="hm-bar hm-bar-one"></span>
          <span className="hm-bar hm-bar-two"></span>
          <span className=" hm-bar hm-bar-three"></span>
        </button>
      </div>
      <MoblieLinks open={isMobileNavOpen}></MoblieLinks>
    </Fragment>
  )
}

export default MobileNavigation
