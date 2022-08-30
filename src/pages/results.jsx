import { useEffect, useState } from 'react'
import { CarsList } from '../cmps/results/car-list'
import { Header } from '../cmps/results/header'
import { carService } from '../services/car.service'

export const Results = () => {
  const [cars, setCars] = useState([])

  useEffect(() => {
    carService.query().then((cars) => setCars(cars.splice(0, 4)))
  }, [])

  return (
    <section className="results">
      <Header />
      {cars.length !== 0 && <CarsList cars={cars} />}
    </section>
  )
}
