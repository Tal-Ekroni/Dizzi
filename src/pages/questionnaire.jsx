import { useState } from "react";
import BudgetPick from "../cmps/questionnaireCmps/budget-pick";
import GearboxPick from "../cmps/questionnaireCmps/gearbox-pick";
import GenderPick from "../cmps/questionnaireCmps/gender-pick";
import HomePage from "../cmps/questionnaireCmps/home-page";
import DynamicQuestionnaireCmp from "../cmps/questionnaireCmps/dynamicQuestionnaireCmp";

export default function Questionnaire() {

    const [currentSection, setCurrentSection] = useState('HomePage');
    const [questionnaire, setQuestionnaire] = useState({
        gender: "",
        isFullPayment: true,
        carTypes: [],
        threeImportantFeaturs: [],
        importantAccessories: [],
        luggageTypes: [],
        gearboxType: "",

    });
    const questionnaireProps = { questionnaire, setQuestionnaire, currentSection, setCurrentSection }
    const onChooseOption = (type, value, nextSection) => {
        setQuestionnaire({ ...questionnaire, type: value }, setCurrentSection(nextSection))
    }
    const renderCurrentSection = () => {
        switch (currentSection) {
            case "HomePage":
                return <div className="home-page">
                    ברוכים הבאים!
                    <p>תתחילו למלא כבר כפרה עליכם</p>

                    <button onClick={() => { setCurrentSection('GenderPick') }}>תקדם</button>
                </div>;
            case "GenderPick":
                return <div className="gender-pick flex justify-center align-center column">
                    <div>איך אתה מעדיף שנפנה אלייך?</div>
                    <p onClick={() => { onChooseOption("gender", "Male", 'BudgetPick') }}>זכר</p>
                    <p onClick={() => { onChooseOption("gender", "Female", 'BudgetPick') }}>נקבה</p>
                    <button onClick={() => { onChooseOption("gender", "None", 'BudgetPick') }}>למי אכפת</button>
                </div>;
            case "BudgetPick":
                return <div className="budget-pick">
                    <label className="switch">
                        תשלום מלא או חודשי חביבי
                        <input type="checkbox" defaultChecked={questionnaire.isFullPayment} onChange={onChooseOption} />
                        <span className="slider round"></span>
                    </label>
                    <button onClick={() => { setCurrentSection('CarType') }}>תקדם</button>

                </div>;
            case "CarType":
            case "FeaturesPick":
            case "AccessoriesPick":
            case "LuggagePick":
                return <DynamicQuestionnaireCmp {...questionnaireProps} />;
            case "GearboxPick":
                return <GearboxPick {...questionnaireProps} />;
            default:
                return null;
        }
    };


    return (
        <div className="questionnaire">
            {renderCurrentSection()}
            <pre>
                {JSON.stringify(questionnaire, null, 2)}
            </pre>
        </div>
    );
}





// const renderCurrentSection = () => {
//     switch (currentSection) {
//         case "HomePage":
//             return <HomePage setCurrentSection={setCurrentSection} />;
//         case "GenderPick":
//             return <GenderPick {...questionnaireProps} />;
//         case "BudgetPick":
//             return <BudgetPick {...questionnaireProps} />;
//         case "CarType":
//         case "FeaturesPick":
//         case "AccessoriesPick":
//         case "LuggagePick":
//             return <DynamicQuestionnaireCmp {...questionnaireProps} />;
//         case "GearboxPick":
//             return <GearboxPick {...questionnaireProps} />;
//         default:
//             return null;
//     }
// };
