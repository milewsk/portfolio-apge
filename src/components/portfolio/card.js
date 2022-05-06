import { Fragment, useState } from 'react'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'
import '../../sass/components/portfolio/card.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Card = (props) => {
  const [isRotated, setIsRotated] = useState(false)

  console.log(props.cardData)
  console.log(props.style)
  const activeFront = classNames(
    'card__side',
    'card__side--front',
    `card__side--front--${props.style}`,
    { rotateY__180: isRotated }
  )
  const activeBack = classNames(
    'card__side',
    'card__side--back',
    `card__side--back--${props.style}`,
    { rotateY__0: isRotated }
  )

  const rotateHandler = () => {
    setIsRotated((isRotated) => !isRotated)
  }

  return (
    <article className="card">
      <div className={activeFront}>
        <h4 className="card__title header--4">{props.cardData.title}</h4>
        <h6 className="card__title--sub header--6">Description</h6>
        <p className="card__description">{props.cardData.description}</p>
        <button
          onClick={rotateHandler}
          className="btn btn--small btn--transparent btn--absolute"
        >
          Check more
        </button>
      </div>
      <div className={activeBack}>
        <h6 className="card-back__header header--6">Technologies used</h6>
        <div className="card__stack">
          {props.cardData.stack.map((element) => {
            return <p>{element}</p>
          })}
        </div>

        <div className="card__link-container">
          <a href={props.cardData.github} className="card__link">
            <FontAwesomeIcon icon={faGithub} color="#fff"></FontAwesomeIcon>
          </a>
          <a href={props.cardData.website} className="card__link">
            <FontAwesomeIcon icon={faGlobe} color="#fff"></FontAwesomeIcon>
          </a>
        </div>
        <button
          onClick={rotateHandler}
          className="btn btn--small btn--transparent btn--absolute"
        >
          Back
        </button>
      </div>
    </article>
  )
}

export default Card
