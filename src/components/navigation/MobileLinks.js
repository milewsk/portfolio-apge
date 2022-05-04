import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../sass/components/navigation/mobile-links.scss'
import my_logo from '../../img/logo/main-logo.png'
import classNames from 'classnames'
import { useSelector, useDispatch } from 'react-redux'
import { openLinks, closeLinks } from '../../store/navigation-slice'

const MoblieLinks = (props) => {
  // nie na propsac tylko na store
  const dispatch = useDispatch()

  const linksOpen = useSelector((state) => state.navigation.areLinksOpen)

  const active = classNames('navigation-mobile__nav', {
    'navigation-mobile__nav--open': linksOpen,
  })

  const closeLinksHandler = () => {
    dispatch(closeLinks())
  }

  return (
    <nav className={active}>
      <ul className="navigation-mobile__list">
        <li className="navigation-mobile__item">
          <Link onClick={closeLinksHandler} to="/home">
            Start
          </Link>
        </li>
        <li className="navigation-mobile__item">
          <Link onClick={closeLinksHandler} to="/about">
            About me
          </Link>
        </li>
        <li className="navigation-mobile__item">
          <Link onClick={closeLinksHandler} to="/portfolio">
            Projects
          </Link>
        </li>
        <li className="navigation-mobile__item">
          <Link onClick={closeLinksHandler} to="/contact">
            Contact me
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default MoblieLinks
