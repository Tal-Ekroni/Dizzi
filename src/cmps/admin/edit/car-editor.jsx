import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { carService } from '../../../services/car.service'
import { MainCarForm } from './forms/main-car-fields'
import { SubModelForm } from './forms/sub-model-fields'
import { SubModelList } from './sub-model-list'

export const CarEditor = () => {
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
  }, [params])

  const handleChange = (ev, isSubModel) => {
    const field = ev.target.id
    const value = isNaN(ev.target.value) || typeof ev.target.value === 'boolean' ? ev.target.value : +ev.target.value
    if(+ev.target.min > value || +ev.target.max < value) return
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
    const updatedCar = {...car}
    updatedCar.subModels.splice(currentSubModel, 1)
    carService.save(updatedCar).then(car => {
      setCar(car)
      setCurrentSubModel(car.subModels.length - 1)
    })
  }

  const onChangeSubModel = (index) => {
    setCurrentSubModel(index)
  }

  const handleAddSubModel = () => {
    const updatedCar = {...car}
    updatedCar.subModels.push(carService.getEmptySubModel())
    carService.save(updatedCar)
    .then(carFromDb => setCar(carFromDb))
    .then(() => setCurrentSubModel(car.subModels.length - 1))
  }

  return (
    <section className="car-edit-container">
      {car && (
        <>
          <h1>{params.carId ? 'ערוך פרטי רכב' : 'הוספת רכב חדש'}</h1>
          <MainCarForm car={car} onHandleChange={handleChange} onSaveCar={onSaveCar} onDeleteCar={onDeleteCar} />
          <section className="sub-models-container">
            <div className="add-sub-model-container">
              <button onClick={handleAddSubModel}><span>+</span> הוסף תת דגם</button>
            </div>
            <SubModelList subModels={car.subModels} onChangeSubModel={onChangeSubModel} currentSubModel={currentSubModel} />
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
