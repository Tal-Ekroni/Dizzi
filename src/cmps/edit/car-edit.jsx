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
      setCar(carToEdit)
    })
  }, [])

  const handleChange = (ev) => {
    const field = ev.target.id
    const value = typeof +ev.target.value === 'number' ? +ev.target.value : ev.target.value
    setCar((prevState) => ({ ...prevState, [field]: value }))
  }

  const handleFeatureChange = (ev) => {
    const field = ev.target.value
    setCar((prevState) => ({ ...prevState, features: { ...prevState.features, [field]: !prevState.features[field] } }))
  }

  const getDynamicInput = (field) => {
    const props = { key: field.name, id: field.name, value: car[field.name], onChange: handleChange }
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
              <label key={opt.value}>
                {opt.he}
                <input type="checkbox" value={opt.value} onChange={handleFeatureChange} checked={car.features[opt.value]} />
              </label>
            ))}
          </div>
        )
      case 'boolean':
        return (
          <div className="bool-btns-container">
            {field.options.map((opt, idx) => (
              <button key={idx} type="button" onClick={() => handleChange({ target: { id: field.name, value: opt.value } })}>
                {opt.he}
              </button>
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
