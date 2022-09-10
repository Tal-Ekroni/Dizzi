import { mainCarFields } from '../../../consts/form-fields'
import { DynamicInput } from '../dynamic-input'

export const MainCarForm = ({ car, onHandleChange, onSaveCar, onDeleteCar }) => {
  return (
    <form className="" onSubmit={onSaveCar}>
      {mainCarFields.map((field) => {
        return (
          <div key={field.name} className="field-container">
            <DynamicInput field={field} handleChange={onHandleChange} item={car} />
          </div>
        )
      })}
      <div className="form-btns-container">
        <button type="submit">שמור</button>
        <button type="button" onClick={() => onDeleteCar()}>
          מחק מכונית
        </button>
      </div>
    </form>
  )
}
