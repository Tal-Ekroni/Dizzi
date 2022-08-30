import { useState } from "react";
import BudgetPick from "../cmps/budget-pick";
import GenderPick from "../cmps/gender-pick";
import HomePage from "../cmps/home-page";

export default function Questionnaire() {
    const questions = [
        {
            questionText: 'איך תרצו שנפנה אליכם?',
            questionSubText: 'על מנת שנוכל לפנות אליכם במין הנכון',
            answerOptions: [
                { answerText: 'זכר', isCorrect: false },
                { answerText: 'נקבה', isCorrect: false },
                { answerText: 'למי אכפת?!', isCorrect: false },
            ],
        },
        {
            questionText: 'מה התקציב שלך?',
            questionSubText: 'ניתן לסנן לפי אופן התשלום הרצוי',
            answerOptions: [
                { answerText: 'מחיר מלא', isCorrect: false },
                { answerText: 'תשלום חודשי', isCorrect: false },
                { answerText: 'input here', isCorrect: false },
            ],
        },
        {
            questionText: 'מה חשוב לך ברכב?',
            questionSubText: 'ניתן לבחור עד 3 מאפיינים',
            answerOptions: [
                { answerText: 'אבזור', isCorrect: false },
                { answerText: 'חיסכון בדלק', isCorrect: false },
                { answerText: 'ביצועים', isCorrect: false },
                { answerText: 'בטיחות', isCorrect: false },
                { answerText: 'רכב גבוה', isCorrect: false },
                { answerText: 'נוחות', isCorrect: false },
                { answerText: 'תא מטען גדול', isCorrect: false },
                { answerText: 'מרחב', isCorrect: false },
            ],
        },
        {
            questionText: 'מה מהדברים הבאים חשוב לך מבחינת אבזור',
            answerOptions: [
                { answerText: 'גג פנורמי/נפתח', isCorrect: false },
                { answerText: 'CAR PLAY', isCorrect: false },
                { answerText: 'מערכת מולטימדיה', isCorrect: false },
                { answerText: 'גלגלי מגנזיום', isCorrect: false },
                { answerText: 'בלם יד חשמלי', isCorrect: false },
                { answerText: 'כניסה והנעה ללא מפתח', isCorrect: false },
                { answerText: 'לוח מחוונים דיגיטלי', isCorrect: false },
                { answerText: 'ריפודי עור', isCorrect: false },
            ],
        },
        ,
        {
            questionText: 'מה היית מעדיף?',
            answerOptions: [
                { answerText: 'גיר ידני', isCorrect: false },
                { answerText: 'גיר אוטומט', isCorrect: false },
            ],
        },
    ];
    
    const [page, setPage] = useState(0);
    const [Questionnaire, setQuestionnaire] = useState({
        gender: "",
        isBudgetMonthly: false,
        threeImportantFeaturs: [],
        importantAccessories: [],
        isManualGearBox: false,
        
    });

    const questionnaireProps = { Questionnaire, setQuestionnaire, setPage }
    const questionnaireCmps = [<HomePage {...questionnaireProps} />, <GenderPick {...questionnaireProps} />, <BudgetPick {...questionnaireProps} />]
    
    return (
        <div className="main-app">
            {questionnaireCmps[page] }
            <pre>
                {JSON.stringify(Questionnaire, null, 2)}
                {page}
            </pre>
        </div>
    );
}


