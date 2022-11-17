import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { questionnaireDynamicCmps as cmpsData } from "../../consts/questionnaireCmpsData";
import { carFilterByAtom } from "../../state/atoms/global";

export default function DynamicPickGenderGearbox({
  currentSection,
  setCurrentSection,
}) {
  const navigate = useNavigate();
  const section = cmpsData[currentSection];
  const [questionnaire, setQuestionnaire] = useRecoilState(carFilterByAtom);

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
        <div className={`option-container ${currentSection==="genderPick" ?"option-scale" : ""}`}>
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
