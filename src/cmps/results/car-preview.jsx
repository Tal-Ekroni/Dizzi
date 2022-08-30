export const CarPreview = ({ car }) => {
  return (
    <article className="car-preview">
      <h3>{`${car.manufacturer} ${car.model}`}</h3>
      <h4>{car.motor}</h4>
      <h3>{car.price}</h3>
      <div className="btns-container">
        <button>רכב זה מעניין אותי</button>
        <button>למפרט המלא</button>
      </div>
    </article>
  )
}
