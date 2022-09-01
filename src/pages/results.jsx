import { useEffect, useState } from 'react'
import { CarsList } from '../cmps/results/car-list'
import { Header } from '../cmps/results/header'
import { carService } from '../services/car.service'
import { SearchAgain } from '../cmps/results/search-again'
import { Filter } from '../cmps/results/filter'

export const Results = () => {
  const [cars, setCars] = useState([])

  useEffect(() => {
    carService.query().then((cars) => {
      const carCopy = [...cars]
      setCars(carCopy.splice(0, 4))
    })
  }, [])

  return (
    <section className="results">
      <Header />
      <Filter />
      <div className="car-list-container">{cars.length !== 0 && <CarsList cars={cars} />}</div>
      <SearchAgain />
    </section>
  )
}
