export const SubModelList = ({ subModels }) => {
  return (
    <div className="sub-model-list-container">
      <nav>
        <ul className="sub-model-list">
          {subModels.map((subModel) => (
            <li key={subModel.name}>{subModel.name}</li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
