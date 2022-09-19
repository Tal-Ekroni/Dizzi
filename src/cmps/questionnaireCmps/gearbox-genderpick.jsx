import { useNavigate } from "react-router-dom";
import { questionnaireDynamicCmps as cmpsData } from "../../consts/questionnaireCmpsData";

export default function DynamicPickGenderGearbox({
  questionnaire,
  setQuestionnaire,
  currentSection,
  setCurrentSection,
}) {
  const navigate = useNavigate();
  const section = cmpsData[currentSection];

  const onChooseOption = (choise) => {
    setQuestionnaire(
      { ...questionnaire, [section.stateName]: choise },
      section.nextSection
        ? setCurrentSection(section.nextSection)
        : navigate(section.endUrl)
    );
  };

  return (
    <div className={section.cmpClassName}>
      <h1>{section.header}</h1>
      {section.subHeader && <small> {section.subHeader}</small>}
      <div className="options-container">
        <div className="option-container">
          <img
            onClick={() => {
              onChooseOption(section.options[0].option);
            }}
            src={section.options[0].svgPath}
          />
          <p>{section.options[0].text}</p>
        </div>
        <div className="option-container">
          <img
            onClick={() => {
              onChooseOption(section.options[1].option);
            }}
            src={section.options[1].svgPath}
          />
          <p>{section.options[1].text}</p>
        </div>
      </div>
      <button
        onClick={() => {
          onChooseOption(section.btnOption.option);
        }}
      >
        {section.btnOption.text}
      </button>
    </div>
  );
}
