import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../sass/components/navigation/desktop-nav.scss'
import my_logo from '../../img/logo/main-logo.png'
import classNames from 'classnames'

const DesktopNavigation = () => {
  return (
    <header className="navigation-desktop">
      <div className="navigation-desktop__logo-box">
        <Link to="/">
          <img
            src={my_logo}
            alt="Logo"
            className="navigation-desktop__logo"
          ></img>
        </Link>
      </div>
      <ul className="navigation-desktop__list">
        <li className="navigation-desktop__item">
          <Link to="">Start</Link>
        </li>
        <li className="navigation-desktop__item">
          <Link to="">About me</Link>
        </li>
        <li className="navigation-desktop__item">
          <Link to="">Projects</Link>
        </li>
        <li className="navigation-desktop__item">
          <Link to="">Contact me</Link>
        </li>
      </ul>
    </header>
  )
}

export default DesktopNavigation
