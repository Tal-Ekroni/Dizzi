import { useState } from "react";
import AccessoriesPick from "../cmps/accessories-pick";
import BudgetPick from "../cmps/budget-pick";
import FeaturePick from "../cmps/features-pick";
import GearboxPick from "../cmps/gearbox-pick";
import GenderPick from "../cmps/gender-pick";
import HomePage from "../cmps/home-page";
import LuggagePick from "../cmps/luggage-pick";
import TypePick from "../cmps/type-pick";

export default function Questionnaire() {
  
    const [page, setPage] = useState(0);
    const [questionnaire, setQuestionnaire] = useState({
        gender: "",
        isBudgetMonthly: false,
        carTypes: [],
        threeImportantFeaturs: [],
        importantAccessories: [],
        luggageTypes: [],
        gearboxType: "",

    });

    const questionnaireProps = { questionnaire, setQuestionnaire, setPage }
    const questionnaireCmps = [
        <HomePage {...questionnaireProps} />,
        <GenderPick {...questionnaireProps} />,
        <BudgetPick {...questionnaireProps} />,
        <TypePick {...questionnaireProps} />,
        <FeaturePick {...questionnaireProps} />,
        <AccessoriesPick {...questionnaireProps} />,
        <LuggagePick {...questionnaireProps} />,
        <GearboxPick {...questionnaireProps} />,
    ]

    return (
        <div className="questionnaire">
            {questionnaireCmps[page]}
            <pre>
                {JSON.stringify(questionnaire, null, 2)}
                {page}
            </pre>
        </div>
    );
}


