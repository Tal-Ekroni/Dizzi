import { useEffect, useState } from 'react'
import { CarsList } from '../cmps/results/car-list'
import { Header } from '../cmps/results/header'
import { carService } from '../services/car.service'
import { SearchAgain } from '../cmps/results/search-again'

export const Results = () => {
  const [cars, setCars] = useState([])

  useEffect(() => {
    carService.query().then((cars) => setCars(cars.splice(0, 4)))
  }, [])

  return (
    <section className="results">
      <Header />
      <div className="car-list-container">{cars.length !== 0 && <CarsList cars={cars} />}</div>
      <SearchAgain />
    </section>
  )
}
