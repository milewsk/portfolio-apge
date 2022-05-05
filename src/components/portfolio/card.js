import { Fragment, useState } from 'react'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import classNames from 'classnames'
import '../../sass/components/portfolio/card.scss'

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
        <h6 className="card__title--sub header--6">Technologies used</h6>
        <p className="card__stack"></p>
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
