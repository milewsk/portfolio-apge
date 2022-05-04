import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { fa, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faJs,
  faHtml5,
  faCss3,
  faGithub,
  faLinkedin,
  faReact,
  faSass,
} from '@fortawesome/free-brands-svg-icons'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'
import '../../sass/components/portfolio/portfolio.scss'
import NavigationBar from '../navigation/NavigationBar'

const Portfolio = () => {
  return (
    <Fragment>
      {/* <NavigationBar></NavigationBar> */}
      <section className="section-portfolio">
        <h2 className="section-portfolio-header header--2">Portfolio</h2>
        <article className="card">
          <div className="card__side card__side--front card__side--front--1">
            <h4 className="card__title header--4">tytuł jeden</h4>
            <h6 className="card__title--sub header--6">Description</h6>
            <p className="card__description">
              ba ba gfdgrbed gbrdgbrdgb gbrdgrdbgbr
            </p>
            <button className="btn btn--small btn--transparent btn--absolute">
              Check more
            </button>
          </div>
          <div className="card__side card_side--back"></div>
        </article>
      </section>
    </Fragment>
  )
}

export default Portfolio
