import { Fragment, useState } from 'react'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import classNames from 'classnames'
import '../../sass/components/portfolio/card.scss'

const Card = (props) => {
  const [isRotated, setIsRotated] = useState()

  const activeFront = classNames()
  const activeBack = classNames()

  const rotateHandler = () => {}

  return (
    <article className="card">
      <div
        className={`card__side card__side--front card__side--front--${props.style}`}
      >
        <h4 className="card__title header--4">tytuł jeden</h4>
        <h6 className="card__title--sub header--6">Description</h6>
        <p className="card__description">
          ba ba gfdgrbed gbrdgbrdgb gbrdgrdbgbr
        </p>
        <button
          onClick={rotateHandler}
          className="btn btn--small btn--transparent btn--absolute"
        >
          Check more
        </button>
      </div>
      <div className="card__side card_side--back">
        <h4 className="card__title header--4">tytuł jeden</h4>
        <h6 className="card__title--sub header--6">Description</h6>
        <p className="card__description">
          ba ba gfdgrbed gbrdgbrdgb gbrdgrdbgbr
        </p>
        <button
          onClick={rotateHandler}
          className="btn btn--small btn--transparent btn--absolute"
        >
          Check more
        </button>
      </div>
    </article>
  )
}

export default Card
