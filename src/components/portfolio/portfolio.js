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

const Portfolio = () => {
  return (
    <Fragment>
      <NavigationBar></NavigationBar>
      <section className="portfolio-section">
        <h2 className="section-about__header header--2">Know me better</h2>
        <article className="section-about__article article--1">
          <h3 className="article__header">Who am I?</h3>
          <p className="article__paragraf">
            Hello my name is Konrad and I'm a computer science and econometrics
            student at Bialystok University of Technology. I think, my friend
            wolid describe me as an outgoing, friendly person with a lot of
            creativity.
          </p>
          <h5 className="article__header--sub">My hobbies</h5>
          <p className="article__paragraf">
            Day by day I'm trying to improve myself at every possible filed. I
            love sport, mostly going to the gym or playing basketball. I like to
            read some mindopening books or watch a good film. Also, I in love
            with creating new stuff like painting and obviously... programing.
          </p>
        </article>
      </section>
    </Fragment>
  )
}

export default Portfolio
