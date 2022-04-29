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
import '../../sass/components/home/home.scss'
import NavigationBar from '../navigation/NavigationBar'
import photo_Konrad from '../../img/photo-konrad.jpg'

const Home = () => {
  return (
    <Fragment>
      <NavigationBar></NavigationBar>
      <section className="section-home">
        <div className="orbit">
          <div className="orbit__img--center">
            <img src={photo_Konrad} alt="photo of myself"></img>
          </div>
          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </li>
            <li>
              <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            </li>
            <li>
              <FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon>
            </li>
            <li>
              <FontAwesomeIcon icon={faCss3}></FontAwesomeIcon>
            </li>
            <li>
              <FontAwesomeIcon icon={faJs}></FontAwesomeIcon>
            </li>
            <li>
              <FontAwesomeIcon icon={faReact}></FontAwesomeIcon>
            </li>

            <li>
              <FontAwesomeIcon icon={faSass}></FontAwesomeIcon>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
            </li>
          </ul>
        </div>
        <header className="section-home__header">
          <h3 className="header--3">
            Hi, <br></br> I'm Konrad
          </h3>
          <h1 className="header--1">Junior Frontend Developer</h1>
          <h5 className="header--5">React | JavaScript | Design</h5>
        </header>
      </section>
      <Loader type="cube-transition"></Loader>
    </Fragment>
  )
}

export default Home
