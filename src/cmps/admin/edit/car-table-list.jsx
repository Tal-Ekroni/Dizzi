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
    { type: 'subModel', he: 'תתי דגם' },
  ]

  useEffect(() => {
    carService.query().then((cars) => setCars(cars))
  }, [])

  const submit = (file) => {
    // setFileName(file.name)
    // setCsvFile(file)
    const reader = new FileReader()

    reader.onload = function ({ target: { result } }) {
      processCsv(result)
    }

    reader.readAsText(file)
  }

  const processCsv = (str, sep = ',') => {
    const headers = str.slice(0, str.indexOf('\n')).split(sep)
    const rows = str.slice(str.indexOf('\n') + 1).split('\n')
    const arr = rows.map((r) => {
      const values = r.split(sep)
      const eachObj = headers.reduce((obj, header, i) => {
        obj[header] = values[i] === 'x' ? false : values[i] === 'v' ? true : values[i]
        return obj
      }, {})
      return eachObj
    })
    carService.saveMultiCars(arr)
  }

  return (
    <div className="car-table-container">
      <div className="header">
        <h1>רשימת מכוניות</h1>
        <form>
          <label className="upload-file">
            <input type="file" onChange={(e) => submit(e.target.files[0])} />
            העלה קובץ CSV
          </label>
        </form>
      </div>
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
            {cars.map((car) => {
              return (
                <tr key={car._id}>
                  {tableCriteria.map(({ type }) => {
                    return <td key={type}>{car[type] || ''}</td>
                  })}

                  <td>
                    <button onClick={() => navigate(`/admin/edit/${car._id}`)}>עריכה</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      ) : (
        <h1>No cars</h1>
      )}
    </div>
  )
}
