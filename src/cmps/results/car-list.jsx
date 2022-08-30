import { CarPreview } from './car-preview'

export const CarsList = ({ cars }) => {
  return (
    <section className="car-list">
      {cars.map((car, idx) => (
        <CarPreview key={car._id} car={car} isBestMatch={idx === 0} />
      ))}
    </section>
  )
}
