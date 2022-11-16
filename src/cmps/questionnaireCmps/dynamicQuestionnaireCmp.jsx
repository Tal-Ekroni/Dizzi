import { useRecoilState } from "recoil";
import { questionnaireDynamicCmps as cmpsData } from "../../consts/questionnaireCmpsData";
import { carFilterByAtom } from "../../state/atoms/global";

export default function DynamicQuestionnaireCmp({
  currentSection,
  setCurrentSection,
}) {
  const section = cmpsData[currentSection];
  const [questionnaire, setQuestionnaire] = useRecoilState(carFilterByAtom);

  const onChooseOption = (userPick) => {
    let currentUserPicks = [...questionnaire[section.stateName]];
    currentUserPicks = currentUserPicks.includes(userPick)
      ? currentUserPicks.filter((i) => i !== userPick)
      : [userPick, ...questionnaire[section.stateName]];
    if (section.isLimitedPicks && currentUserPicks.length > 3) {
      return;
    }
    setQuestionnaire({
      ...questionnaire,
      [section.stateName]: [...currentUserPicks],
    });
  };

  return (
    <div className={section.cmpClassName}>
      <h1>{section.header}</h1>
      <small style={{ visibility: section.subHeader ? "visible" : "hidden" }}>
        {section.subHeader}
      </small>
      <div className={section.containerClassName}>
        {section.data.map((item, idx) => {
          return (
            <div
              key={idx}
              className={`questionnaire--dynamic-options ${
                questionnaire[section.stateName].includes(item.text)
                  ? "picked"
                  : ""
              }`}
              onClick={() => {
                onChooseOption(item.text);
              }}
            >
              <img src={item.svgPath} alt="" />
              <span>{item.text}</span>
            </div>
          );
        })}
      </div>
      <div className="next-section-btns">
        {section.nextSectionBtnOption.map((btn) => (
          <button
            onClick={() => {
              if (questionnaire.threeImportantFeaturs.includes("אבזור")) {
                setQuestionnaire({
                  ...questionnaire,
                  threeImportantFeaturs:
                    questionnaire.threeImportantFeaturs.filter(
                      (feature) => feature !== "אבזור"
                    ),
                });
                setCurrentSection("AccessoriesPick");
              } else if (
                questionnaire.threeImportantFeaturs.includes("תא מטען גדול")
              ) {
                setQuestionnaire({
                  ...questionnaire,
                  threeImportantFeaturs:
                    questionnaire.threeImportantFeaturs.filter(
                      (feature) => feature !== "תא מטען גדול"
                    ),
                });
                setCurrentSection("LuggagePick");
              } else setCurrentSection(section.nextSection);
            }}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}
