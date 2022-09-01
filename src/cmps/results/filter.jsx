import { useState } from 'react'

export const Filter = () => {
  const [filterBy, setFilterBy] = useState('compatibility')
  const filterTypes = [
    { type: 'compatibility', title: 'המתאים ביותר' },
    { type: 'price', title: 'מהזול ליקר' },
    { type: 'safety', title: 'הבטיחותי ביותר' },
    { type: 'space', title: 'המרווח ביותר' },
    { type: 'availability', title: 'זמינות אספקה' },
  ]
  return (
    <section className="filter-container">
      <span>מיין לפי:</span>
      <div className="filter-btns-container">
        {filterTypes.map(({ type, title }, idx) => (
          <button onClick={() => setFilterBy(type)} className={`${type === filterBy ? 'current' : ''}`}>
            {title}
          </button>
        ))}
      </div>
    </section>
  )
}
