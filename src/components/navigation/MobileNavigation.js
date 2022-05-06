import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../sass/components/navigation/mobile-nav.scss'
import my_logo from '../../img/logo/main-logo.png'
import classNames from 'classnames'
import MoblieLinks from './MobileLinks'
import { useSelector, useDispatch } from 'react-redux'
import { openLinks, closeLinks } from '../../store/navigation-slice'

const MobileNavigation = () => {
  const dispatch = useDispatch()

  const linksOpen = useSelector((state) => state.navigation.areLinksOpen)

  const active = classNames('navigation-mobile__menu', {
    'navigation-mobile__menu--open': linksOpen,
  })

  // reverse state
  const openMobileNavHandler = () => {
    if (linksOpen) {
      dispatch(closeLinks())
    } else {
      dispatch(openLinks())
    }
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
      <MoblieLinks></MoblieLinks>
    </Fragment>
  )
}

export default MobileNavigation
