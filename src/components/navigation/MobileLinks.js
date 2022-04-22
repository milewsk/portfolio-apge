import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../sass/components/navigation/mobile-links.scss'
import my_logo from '../../img/logo/main-logo.png'
import classNames from 'classnames'

const MoblieLinks = (props) => {
  const active = classNames('navigation-mobile__nav', {
    'navigation-mobile__nav--open': props.open,
  })

  return (
    <nav className={active}>
      <ul className="navigation-mobile__list">
        <li className="navigation-mobile__item">
          <Link to="/home">Start</Link>
        </li>
        <li className="navigation-mobile__item">
          <Link to="/about">About me</Link>
        </li>
        <li className="navigation-mobile__item">
          <Link to="/portfolio">Projects</Link>
        </li>
        <li className="navigation-mobile__item">
          <Link to="/contact">Contact me</Link>
        </li>
      </ul>
    </nav>
  )
}

export default MoblieLinks
