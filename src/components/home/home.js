import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { fa } from '@fortawesome/free-solid-svg-icons'
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
          <div className="img--center">
            <img src={photo_Konrad} alt="photo of myself"></img>
          </div>
          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </li>
            <li>
              <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
              <p></p>
            </li>
            <li>
              <FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon>
            </li>
            <li>
              <FontAwesomeIcon icon={faCss3}></FontAwesomeIcon>
              <p></p>
            </li>
            <li>
              <FontAwesomeIcon icon={faJs}></FontAwesomeIcon>
              <p></p>
            </li>
            <li>
              <FontAwesomeIcon icon={faReact}></FontAwesomeIcon>
              <p></p>
            </li>

            <li>
              <FontAwesomeIcon icon={faSass}></FontAwesomeIcon>
              <p></p>
            </li>
          </ul>
        </div>
        <header className="section-home__header">
          <h1></h1>
          <h3></h3>
        </header>
      </section>
      <Loader type="cube-transition"></Loader>
    </Fragment>
  )
}

export default Home
