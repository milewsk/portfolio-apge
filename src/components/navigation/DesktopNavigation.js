import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  faDiagramProject,
  faEnvelope,
  faHome,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import '../../sass/components/navigation/desktop-nav.scss'
import my_logo from '../../img/logo/main-logo.png'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
      <nav className="navigation-desktop__list">
        <Link to="/home" className="link-home">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e"></FontAwesomeIcon>
        </Link>

        <Link to="/about" className="link-about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e"></FontAwesomeIcon>
        </Link>

        <Link to="/portfolio" className="link-project">
          <FontAwesomeIcon
            icon={faDiagramProject}
            color="#4d4d4e"
          ></FontAwesomeIcon>
        </Link>

        <Link to="/contact" className="link-contact">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"></FontAwesomeIcon>
        </Link>
      </nav>
    </header>
  )
}

export default DesktopNavigation
