import car1 from '../../assets/img/car1.JPG'
import car2 from '../../assets/img/car2.JPG'
import car3 from '../../assets/img/car3.JPG'

import { useNavigate } from 'react-router-dom'

import { utilService } from '../../services/util.service'
import { useEffect } from 'react'

export const CarPreview = ({ car, isBestMatch }) => {
  const cars = [car1, car2, car3]
  const navigate = useNavigate()

  const getRandCarImg = () => {
    return cars[utilService.getRandomIntInclusive(0, cars.length - 1)]
  }

  return (
    <article className={`car-preview ${isBestMatch ? 'best-match' : ''}`}>
      {isBestMatch && <p className="best-match-title">המתאים ביותר עבורך</p>}
      <div className="car-logo">
        <div className="car-logo-outer">
          <div className="car-logo-inner"></div>
        </div>
      </div>
      <div className="car-img-container">
        <img src={getRandCarImg()} alt="" />
      </div>
      <div className="car-details">
        <h3 className="title">{`${car.manufacturer} ${car.model}`}</h3>
        <h4 className="motor">{car.motor}</h4>
        <h3 className="price ltr">{utilService.priceFormat(car.price) + '₪'}</h3>
      </div>
      <div className="btns-container">
        <button>רכב זה מעניין אותי</button>
        <button onClick={() => navigate(`/car/${car._id}`)}>למפרט המלא</button>
      </div>
    </article>
  )
}
