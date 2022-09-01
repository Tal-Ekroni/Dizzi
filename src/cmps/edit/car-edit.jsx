import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { carService } from '../../services/car.service'
import { carEditFields } from '../../consts/form-fields'
export const CarEdit = () => {
  const params = useParams()
  const navigate = useNavigate()
  const [car, setCar] = useState(null)

  useEffect(() => {
    const { carId } = params
    if (!carId) navigate('/')

    carService.getById(carId).then((carToEdit) => {
      if (!carToEdit) navigate('/')
      console.log(carToEdit)
      setCar(carToEdit)
    })
  }, [])

  const getDynamicInput = (field) => {
    const props = { key: field.name, id: field.name, value: car[field.name] }
    switch (field.type) {
      case 'dropdown':
        return (
          <select {...props}>
            {field.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.he}
              </option>
            ))}
          </select>
        )
      case 'number':
        return <input type="number" {...props} />
      case 'range':
        return <input type="range" {...props} min={field.range.min} max={field.range.max} />
      case 'multi-check-select':
        return (
          <div className="multi-select-container">
            {field.options.map((opt) => (
              <label>
                {opt.he}
                <input type="checkbox" key={opt.value} value={opt.value} checked={car.features[opt.value]} />
              </label>
            ))}
          </div>
        )
      default:
        break
    }
  }

  return (
    <section className="car-edit-container">
      <form>
        {car &&
          carEditFields.map((field) => {
            return (
              <div key={field.name} className="field-container">
                <label htmlFor={field.name}>{field.label.he}</label>
                {getDynamicInput(field)}
              </div>
            )
          })}
      </form>
    </section>
  )
}
