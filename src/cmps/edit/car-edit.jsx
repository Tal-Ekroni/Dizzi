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
  const [currentSubModel, setCurrentSubModel] = useState(0)

  useEffect(() => {
    const { carId } = params
    if (carId) {
      carService.getById(carId).then((carToEdit) => {
        if (!carToEdit) navigate('/')
        setCar(carToEdit)
      })
    } else {
      const newCar = carService.getEmptyCar()
      setCar(newCar)
    }
  }, [])

  const handleChange = (ev, isSubModel) => {
    const field = ev.target.id
    const value = isNaN(ev.target.value) || typeof ev.target.value === 'boolean' ? ev.target.value : +ev.target.value
    if (isSubModel) {
      const subModels = car.subModels
      const subModel = subModels[currentSubModel]
      subModel[field] = value
      subModels[currentSubModel] = subModel
      setCar((prevState) => ({ ...prevState, subModels }))
    } else {
      setCar((prevState) => ({ ...prevState, [field]: value }))
    }
  }

  const handleFeatureChange = (ev) => {
    const field = ev.target.value
    const subModels = car.subModels
    const subModel = subModels[currentSubModel]
    subModel.features[field] = !subModel.features[field]
    subModels[currentSubModel] = subModel
    setCar((prevState) => ({ ...prevState, subModels }))
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

  const onDeleteSubModel = () => {
    const subModels = car.subModels
    subModels.splice(currentSubModel, 1)
    setCar((prevState) => ({ ...prevState, subModels }))
    setCurrentSubModel(0)
  }

  const onChangeSubModel = (index) => {
    setCurrentSubModel(index)
  }

  return (
    <section className="car-edit-container">
      {car && (
        <>
          <MainCarForm car={car} onHandleChange={handleChange} onSaveCar={onSaveCar} onDeleteCar={onDeleteCar} />
          <section className="sub-models-container">
            <SubModelList subModels={car.subModels} onChangeSubModel={onChangeSubModel} />
            <SubModelForm
              subModel={car.subModels[currentSubModel]}
              onHandleChange={(ev) => handleChange(ev, true)}
              onHandleFeatureChange={handleFeatureChange}
              onSaveCar={onSaveCar}
              onDeleteSubModel={onDeleteSubModel}
            />
          </section>
        </>
      )}
    </section>
  )
}
