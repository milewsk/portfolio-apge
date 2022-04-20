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
import '../../sass/components/button/button.scss'
import NavigationBar from '../navigation/NavigationBar'

const Contact = () => {
  return (
    <Fragment>
      <NavigationBar></NavigationBar>
      <section className="section-contact">
        <div className="section-contact__box">
          <h2 className="section-contact__header">Contact me</h2>
          <p className="section-contact__description">
            If u have any questions, job offer or you just wanna talk about my
            projects let me know. Send me an email right now.
          </p>
          <form className="section-contact__form">
            <input
              className="form__input"
              placeholder="Your email"
              id="email"
              type="email"
            ></input>
            <label className="form__label" htmlFor="">
              Your email
            </label>

            <input
              className="form__input"
              placeholder="Title"
              id="title"
              type="text"
            ></input>
            <label className="form__label" htmlFor="title">
              Title
            </label>
            <textarea
              placeholder="Type your message here.."
              className="form__text-area"
            ></textarea>
            <div className="flexbox__center">
              {' '}
              <button type="submit" className=" btn btn--small">
                Send email
              </button>
            </div>
          </form>
        </div>
      </section>
      <Loader type="cube-transition"></Loader>
    </Fragment>
  )
}

export default Contact
