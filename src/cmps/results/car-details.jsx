import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { carService } from "../../services/car.service"

import carBack from '../../assets/img/car-details-back.webp'
import more1 from '../../assets/img/car-details-more/more1.png'
import more2 from '../../assets/img/car-details-more/more2.png'
import more3 from '../../assets/img/car-details-more/more3.png'

export const CarDetails = () => {
    const params = useParams()
    const [car, setCar] = useState({})
    const criteria = ['סוג מנוע', 'נפח מנוע[סמ"ק]', 'קדח X מהלך[מ"מ]', 'כ"ס', 'דגם', 'תיבת הילוכים' ]
    
    useEffect(() => {
        carService.getById(params.carId).then(car => setCar(car))
    }, [])

    return <section className="car-details-container">
        <div className="car-img-container">
            <img src={carBack} alt="" />
            <h3 className="title">{`${car.manufacturer} ${car.model}`}</h3>
        </div>
        <div className="description-container">
            <p>
            תגידו היי לקורולה קרוס ההיברידית החדשה! ה-SUV החדש ממשפחת קורולה, עם סטייל חדש
            ועוצמתי למכונית הנמכרת ביותר בכל הזמנים. השילוב של רכב גבוה ומרווח עם הטכנולגיה
            ההיברידית והבטיחותית המתקדמת ביותר מספק כל מה שמשפחות צריכות בחיי היומיום. מוכנים
            לרכב משפחתי אמיתי? זו נסיעה ששווה לחכות לה. הירשמו ונעדכן אתכם במידע נוסף.
            </p>
        </div>
        <div className="preview-imgs-container">
            <img src={more1} alt="" />
            <img src={more2} alt="" />
            <img src={more3} alt="" />
        </div>
        <div className="info-table-container">
            <h2>דגמים ומידע</h2>
            <table>
                <thead>
                    <tr>
                        <th>דגם</th>
                        <th>`${car.manufacturer} ${car.model}`</th>
                        <th>`${car.manufacturer} ${car.model}`</th>
                    </tr>
                </thead>
                <tbody>
                    {criteria.map((crit, idx) => {
                        return <tr key={idx}>
                            <td>{crit}</td>
                            <td>{car.motor}</td>
                            <td>{car.motor}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    </section>
}