export const DynamicInput = ({ field, handleChange, handleFeatureChange, item }) => {
  const getInput = (field) => {
    const props = { key: field.name, id: field.name, placeholder: field?.placeholder?.he || '', value: item[field.name], onChange: handleChange }
    switch (field.type) {
      case 'dropdown':
        return (
          <select {...props} value={item[field.name]}>
            {field.options.map((option) => (
              <option key={option.value}>{option.he}</option>
            ))}
          </select>
        )
      case 'text':
        return <input type="text" {...props} />
      case 'number':
        return <input type="number" {...props} min={field?.range?.min ? +field.range.min : 0} max={field?.range?.max ? +field.range.max : Infinity}/>
      case 'range':
        return <input type="range" {...props} min={field.range.min} max={field.range.max} />
      case 'multi-check-select':
        return (
          <div className="multi-select-container">
            {field.options.map((opt) => (
              <label key={opt.value}>
                {opt.he}
                <input type="checkbox" value={opt.value} onChange={handleFeatureChange} checked={item.features[opt.value]} />
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

  return (
    <>
      {field.heading && <h2>{field.heading.he}</h2>}
      <label>
        {field.label && field.label.he}
        {getInput(field)}
      </label>
    </>
  )
}
