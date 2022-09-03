import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { carService } from '../../services/car.service'
import { carEditFields } from '../../consts/form-fields'
import { DynamicInput } from './dynamic-input'

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
    const value = isNaN(ev.target.value) || typeof ev.target.value === 'boolean' ? ev.target.value : +ev.target.value
    setCar((prevState) => ({ ...prevState, [field]: value }))
  }

  const handleFeatureChange = (ev) => {
    const field = ev.target.value
    setCar((prevState) => ({ ...prevState, features: { ...prevState.features, [field]: !prevState.features[field] } }))
  }

  return (
    <section className="car-edit-container">
      <form>
        {car &&
          carEditFields.map((field) => {
            return (
              <div key={field.name} className="field-container">
                <label htmlFor={field.name}>{field.label.he}</label>
                <DynamicInput field={field} handleChange={handleChange} handleFeatureChange={handleFeatureChange} car={car} />
              </div>
            )
          })}
      </form>
    </section>
  )
}
