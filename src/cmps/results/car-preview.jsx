import car1 from '../../assets/img/car1.JPG'
import car2 from '../../assets/img/car2.JPG'
import car3 from '../../assets/img/car3.JPG'

import { Link, useNavigate } from 'react-router-dom'

import { utilService } from '../../services/util.service'

export const CarPreview = ({ car, isBestMatch }) => {
  const cars = [car1, car2, car3]
  const navigate = useNavigate()

  const getRandCarImg = () => {
    return cars[utilService.getRandomIntInclusive(0, cars.length - 1)]
  }

  const carPriceFormat = (price) => {
    let priceStr = price + ''
    if (priceStr.length <= 3) return price

    let formattedPrice = ''
    let digitsCount = 0

    while (priceStr.length > 0) {
      if (digitsCount % 3 === 0 && formattedPrice.length !== 0) formattedPrice = `,${formattedPrice}`
      formattedPrice = `${priceStr.charAt(priceStr.length - 1)} ${formattedPrice}`
      priceStr = priceStr.substring(0, priceStr.length - 1)
      digitsCount++
    }
    return formattedPrice.split().reverse().join()
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
        <h3 className="price ltr">{carPriceFormat(car.price) + '₪'}</h3>
      </div>
      <div className="btns-container">
        <button>רכב זה מעניין אותי</button>
        <button onClick={() => navigate(`${car._id}`)}>למפרט המלא</button>
        <button onClick={() => navigate(`/edit/${car._id}`)}>ערוך מכונית</button>
      </div>
    </article>
  )
}
