import '../../sass/layout/navigation.scss'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className="navigation-bar">
      <Link className="navigation__logo-box" to="/">
        <img src="" alt="My Logo"></img>
      </Link>
      <nav className="navigation__links">
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
