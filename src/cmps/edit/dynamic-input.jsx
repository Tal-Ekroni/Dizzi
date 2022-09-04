export const DynamicInput = ({ field, handleChange, handleFeatureChange, car }) => {
  const props = { key: field.name, id: field.name, value: car[field.name], onChange: handleChange }
  switch (field.type) {
    case 'dropdown':
      return (
        <select {...props} value={car[field.name]}>
          {field.options.map((option) => (
            <option key={option.value}>{option.he}</option>
          ))}
        </select>
      )
    case 'number':
      return <input type="number" {...props} />
    case 'range':
      return <input type="range" {...props} min={field.range.min} max={field.range.max} />
    case 'multi-check-select':
      return (
        <div className="multi-select-container">
          {field.options.map((opt) => (
            <label key={opt.value}>
              {opt.he}
              <input type="checkbox" value={opt.value} onChange={handleFeatureChange} checked={car.features[opt.value]} />
            </label>
          ))}
        </div>
      )
    case 'boolean':
      return (
        <div className="bool-btns-container">
          {field.options.map((opt, idx) => (
            <button key={idx} type="button" onClick={() => handleChange({ target: { id: field.name, value: opt.value } })}>
              {opt.he}
            </button>
          ))}
        </div>
      )
    default:
      break
  }
}
