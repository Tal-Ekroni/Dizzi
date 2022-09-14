export const SubModelList = ({ subModels, onChangeSubModel, currentSubModel }) => {
  return (
    <div className="sub-model-list-container">
      <nav>
        <ul className="sub-model-list">
          {subModels.map((subModel, index) => (
            <li key={subModel.name} onClick={() => onChangeSubModel(index)} className={index === currentSubModel ? 'current' : ''}>
              {subModel.name}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
