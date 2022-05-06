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
import Card from './card'
import { cardData } from './card-data'

const Portfolio = () => {
  return (
    <Fragment>
      {/* <NavigationBar></NavigationBar> */}
      <section className="section-portfolio">
        <h2 className="section-portfolio-header header--2">Portfolio</h2>
        <Card cardData={cardData[0]} style="1"></Card>
        <Card cardData={cardData[1]} style="2"></Card>
        <Card cardData={cardData[2]} style="3"></Card>
      </section>
      <Loader type="cube-transition"></Loader>
    </Fragment>
  )
}

export default Portfolio
