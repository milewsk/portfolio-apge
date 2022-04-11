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
import '../../sass/components/home/home.scss'

const Home = () => {
  return (
    <Fragment>
      <section className="section-home">Cześć tu kontakty</section>
      <Loader type="cube-transition"></Loader>
    </Fragment>
  )
}

export default Home
