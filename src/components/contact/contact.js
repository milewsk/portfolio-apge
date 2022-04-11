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
import '../../sass/components/contact/contact.scss'

const Contact = () => {
  return (
    <Fragment>
      <section className="section-contact">
        <div className="section-contact__box">
          <form className="section-contact__form">
            <label></label>
            <input></input>
            <label></label>
            <input></input>
            <label></label>
            <textarea></textarea>
          </form>
        </div>
      </section>
      <Loader type="cube-transition"></Loader>
    </Fragment>
  )
}

export default Contact
