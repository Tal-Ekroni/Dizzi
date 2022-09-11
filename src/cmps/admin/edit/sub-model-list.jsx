export const SubModelList = ({ subModels, onChangeSubModel }) => {
  return (
    <div className="sub-model-list-container">
      <nav>
        <ul className="sub-model-list">
          {subModels.map((subModel, index) => (
            <li key={subModel.name} onClick={() => onChangeSubModel(index)}>
              {subModel.name}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
