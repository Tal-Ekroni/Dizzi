import { subModelFields } from '../../../consts/form-fields'
import { DynamicInput } from '../dynamic-input'

export const SubModelForm = ({ subModel, onHandleChange, onSaveCar, onDeleteCar }) => {
  return (
    <form className="" onSubmit={onSaveCar}>
      {subModelFields.map((field) => {
        return (
          <div key={field.name} className="field-container">
            <DynamicInput field={field} handleChange={onHandleChange} item={subModel} />
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
