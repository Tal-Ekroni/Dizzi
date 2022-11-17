import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { carService } from '../../services/car.service'

import carBack from '../../assets/img/car-details-back.webp'
import more1 from '../../assets/img/car-details-more/more1.png'
import more2 from '../../assets/img/car-details-more/more2.png'
import more3 from '../../assets/img/car-details-more/more3.png'
import { useRecoilValue } from 'recoil'
import { carResultsByModelSelector } from '../../state/selectors/results'
import { selectedCarModelAtom } from '../../state/atoms/global'

export const CarDetails = () => {
  const params = useParams()
  const [car, setCar] = useState(null)
  const carsFromSelectedModel = useRecoilValue(carResultsByModelSelector)
  const model = useRecoilValue(selectedCarModelAtom)
  const criteria = [
    { kind: 'engine', title: 'סוג מנוע' },
    { kind: 'horsePower', title: 'כ"ס' },
    { kind: 'model', title: 'דגם' },
    { kind: 'isManual', title: 'תיבת הילוכים' },
  ]

  useEffect(() => {
    carService.getById(params.carId).then((car) => setCar(car))
  }, [])
  console.log(car)
  return car ? (
    <section className="car-details-container">
      <div className="car-img-container">
        <img src={car.backgroungPhoto} alt="" />
        <h3 className="title">{`${car.manufacturer} ${car.model}`}</h3>
      </div>
      <div className="description-container">
        <p>
          תגידו היי לקורולה קרוס ההיברידית החדשה! ה-SUV החדש ממשפחת קורולה, עם סטייל חדש ועוצמתי למכונית הנמכרת ביותר בכל הזמנים. השילוב של רכב גבוה ומרווח עם הטכנולגיה ההיברידית והבטיחותית המתקדמת
          ביותר מספק כל מה שמשפחות צריכות בחיי היומיום. מוכנים לרכב משפחתי אמיתי? זו נסיעה ששווה לחכות לה. הירשמו ונעדכן אתכם במידע נוסף.
        </p>
      </div>
      <div className="preview-imgs-container">
        <div className="img-container">
          <img src={more1} alt="" />
        </div>
        <div className="img-container">
          <img src={more2} alt="" />
        </div>
        <div className="img-container">
          <img src={more3} alt="" />
        </div>
      </div>
      <div className="info-table-container">
        <h2>דגמים ומידע</h2>
        <table>
          <thead>
            <tr>
              <th>דגם</th>
              {carsFromSelectedModel.map((car) => (
                <th key={car.subModel}>
                  <p>
                    {car.model} {car.subModel}
                  </p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {criteria.map((crit, idx) => {
              return (
                <tr key={idx}>
                  <td>{crit.title}</td>
                  {carsFromSelectedModel.map((car) => {
                    if (crit.kind === 'isManual') {
                      return <td key={car.subModel}>{car[crit.kind] ? 'ידני' : 'אוטומט'}</td>
                    }
                    return <td key={car.subModel}>{car[crit.kind] || 'מידע'}</td>
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </section>
  ) : (
    <div>Loading car</div>
  )
}
