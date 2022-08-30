import { CarPreview } from './car-preview'

export const CarsList = ({ cars }) => {
  return (
    <section className="cars-list">
      {cars.map((car) => (
        <CarPreview key={car._id} car={car} />
      ))}
    </section>
  )
}
