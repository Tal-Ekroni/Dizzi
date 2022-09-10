import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { carService } from '../../services/car.service'
import { MainCarForm } from './forms/main-car-fields'
import { SubModelForm } from './forms/sub-model-fields'
import { SubModelList } from './sub-model-list'

export const CarEdit = () => {
  const params = useParams()
  const navigate = useNavigate()
  const [car, setCar] = useState(null)
  const [currentSubModel, setCurrentSubModel] = useState(null)

  useEffect(() => {
    const { carId } = params
    if (carId) {
      carService.getById(carId).then((carToEdit) => {
        if (!carToEdit) navigate('/')
        setCar(carToEdit)
        setCurrentSubModel(carToEdit.subModels[0])
      })
    } else {
      const newCar = carService.getEmptyCar()
      setCar(newCar)
      setCurrentSubModel(newCar.subModels[0])
    }
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

  const onSaveCar = (ev) => {
    ev.preventDefault()
    carService.save(car).then((updatedCar) => {
      setCar(updatedCar)
      if (!params.carId) navigate(`${updatedCar._id}`)
    })
  }

  const onDeleteCar = () => {
    carService.remove(car._id).then(() => navigate('/results'))
  }

  return (
    <section className="car-edit-container">
      {car && (
        <>
          <MainCarForm car={car} onHandleChange={handleChange} onSaveCar={onSaveCar} onDeleteCar={onDeleteCar} />
          <section className="sub-models-container">
            <SubModelList subModels={car.subModels} />
            <SubModelForm subModel={currentSubModel} onHandleChange={handleChange} onSaveCar={onSaveCar} onDeleteCar={onDeleteCar} />
          </section>
        </>
      )}
    </section>
  )
}
