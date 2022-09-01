import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { carService } from '../../services/car.service'

import carBack from '../../assets/img/car-details-back.webp'
import more1 from '../../assets/img/car-details-more/more1.png'
import more2 from '../../assets/img/car-details-more/more2.png'
import more3 from '../../assets/img/car-details-more/more3.png'

export const CarDetails = () => {
  const params = useParams()
  const [car, setCar] = useState(null)
  const criteria = [
    { kind: 'motor', title: 'סוג מנוע' },
    { kind: 'motor', title: 'נפח מנוע[סמ"ק]' },
    { kind: 'something', title: 'קדח X מהלך[מ"מ]' },
    { kind: 'horsePower', title: 'כ"ס' },
    { kind: 'model', title: 'דגם' },
    { kind: 'isGearAuto', title: 'תיבת הילוכים' },
  ]

  useEffect(() => {
    carService.getById(params.carId).then((car) => setCar(car))
  }, [])

  return car ? (
    <section className="car-details-container">
      <div className="car-img-container">
        <img src={carBack} alt="" />
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
              <th>{`${car.manufacturer} ${car.model}`}</th>
              <th>{`${car.manufacturer} ${car.model}`}</th>
            </tr>
          </thead>
          <tbody>
            {criteria.map((crit, idx) => {
              return (
                <tr key={idx}>
                  <td>{crit.title}</td>
                  <td>{car[crit.kind] || 'מידע'}</td>
                  <td>{car[crit.kind] || 'מידע'}</td>
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
