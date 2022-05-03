import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  faDiagramProject,
  faEnvelope,
  faHome,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'
import '../../sass/components/about/about.scss'
import NavigationBar from '../navigation/NavigationBar'

const About = () => {
  return (
    <Fragment>
      <NavigationBar></NavigationBar>
      <section className="section-about">
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
        <article className="section-about__article article--2">
          <h3 className="article__header">My technological stack</h3>
          <p className="article__paragraf">
            Mostly, I'm into creating web pages and making mockups. Slowly but
            surely I'm trying to write more clean code and discover new useflil
            features.
          </p>
          <h5 className="article__header--sub">Technologies</h5>
          <ul className="article__list">
            <li className="list__item">HTML / CSS</li>
            <li className="list__item">Sass</li>
            <li className="list__item">JavaScript</li>
            <li className="list__item">React</li>
            <li className="list__item">
              SOLID, DRY, RWD (at least I'm trying...)
            </li>
            <li className="list__item">GIT, Gitflow, Jira, Sourcetree</li>
            <li className="list__item">C#, ORM, Linq, SQL</li>
          </ul>
        </article>
      </section>
      <Loader type="cube-transition"></Loader>
    </Fragment>
  )
}

export default About
