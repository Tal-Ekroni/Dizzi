import { subModelFields } from '../../../../consts/form-fields'
import { DynamicInput } from '../dynamic-input'

export const SubModelForm = ({ subModel, onHandleChange, onHandleFeatureChange, onSaveCar, onDeleteSubModel }) => {
  return (
    <form className="" onSubmit={onSaveCar}>
      {subModelFields.map((field) => {
        return (
          <div key={field.name} className="field-container">
            <DynamicInput field={field} handleChange={onHandleChange} handleFeatureChange={onHandleFeatureChange} item={subModel} />
          </div>
        )
      })}
      <div className="form-btns-container">
        <button type="submit">שמור</button>
        <button type="button" onClick={onDeleteSubModel}>
          מחק תת-דגם
        </button>
      </div>
    </form>
  )
}
