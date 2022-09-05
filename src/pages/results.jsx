import { useEffect, useState } from 'react'
import { CarsList } from '../cmps/results/car-list'
import { Header } from '../cmps/results/header'
import { carService } from '../services/car.service'
import { SearchAgain } from '../cmps/results/search-again'
import { Filter } from '../cmps/results/filter'
import { useNavigate } from 'react-router-dom'

export const Results = () => {
  const [cars, setCars] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    carService.query().then((cars) => {
      const carCopy = [...cars]
      // setCars(carCopy.splice(0, 4))
      setCars(carCopy)
    })
  }, [])

  return (
    <section className="results">
      <Header />
      <Filter />
      <button onClick={() => navigate('/edit')}>הוסף מכונית</button>
      <div className="car-list-container">{cars.length !== 0 && <CarsList cars={cars} />}</div>
      <SearchAgain />
    </section>
  )
}
