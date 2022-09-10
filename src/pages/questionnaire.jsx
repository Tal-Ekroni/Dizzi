import { useState } from "react";
import HomePage from "../cmps/questionnaireCmps/home-page";
import BudgetPick from "../cmps/questionnaireCmps/budget-pick";
import DynamicQuestionnaireCmp from "../cmps/questionnaireCmps/dynamicQuestionnaireCmp";
import DynamicPickGenderGearbox from "../cmps/questionnaireCmps/gearbox-genderpick";

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

    const renderCurrentSection = () => {
        switch (currentSection) {
            case "HomePage":
                return <HomePage setCurrentSection={setCurrentSection} />;
            case "GenderPick":
            case "GearboxPick":
                return <DynamicPickGenderGearbox {...questionnaireProps} />;
            case "BudgetPick":
                return <BudgetPick {...questionnaireProps} />;
            case "CarType":
            case "FeaturesPick":
            case "AccessoriesPick":
            case "LuggagePick":
                return <DynamicQuestionnaireCmp {...questionnaireProps} />;
            default:
                return null;
        }
    };

    return (
        <div className="questionnaire">
            {renderCurrentSection()}
        </div>
    );
}


