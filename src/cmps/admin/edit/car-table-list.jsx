import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { carService } from '../../../services/car.service'

export const CarTableList = () => {
  const [cars, setCars] = useState()
  const navigate = useNavigate()
  const tableCriteria = [
    { type: '_id', he: 'מספר סידורי' },
    { type: 'manufacturer', he: 'יצרן' },
    { type: 'model', he: 'דגם' },
    { type: 'category', he: 'קטגוריה' },
    { type: 'subModels', he: 'תתי דגם' },
  ]

  useEffect(() => {
    carService.query().then((cars) => setCars(cars))
  }, [])

  return (
    <div className="car-table-container">
      <h1>רשימת מכוניות</h1>
      {cars ? (
        <table>
          <thead>
            <tr>
              {tableCriteria.map(({ type, he }) => (
                <th key={type}>{he}</th>
              ))}
              <th>פעולות</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => (
              <tr key={car._id}>
                {tableCriteria.map(({ type }) => {
                  if (type === 'subModels') return <td key={type}>{car[type].length}</td>
                  return <td key={type}>{car[type]}</td>
                })}
                <td>
                  <button onClick={() => navigate(`/admin/edit/${car._id}`)}>עריכה</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h1>No cars</h1>
      )}
    </div>
  )
}
