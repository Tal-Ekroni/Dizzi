import { useState } from 'react'

export const Filter = () => {
  const [filterBy, setFilterBy] = useState('')
  const filterTypes = ['המתאים ביותר', 'מהזול ליקר', 'הבטיחותי ביותר', 'המרווח ביותר', 'זמינות אספקה']
  return (
    <section className="filter-container">
      <span>מיין לפי:</span>
      <div className="filter-btns-container">
        {filterTypes.map((type, idx) => (
          <button className={`${idx === 0 ? 'current' : ''}`}>{type}</button>
        ))}
      </div>
    </section>
  )
}
