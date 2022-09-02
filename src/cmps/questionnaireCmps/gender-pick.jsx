export default function GenderPick({ questionnaire, setQuestionnaire, currentSection, setCurrentSection }) {
    const onChooseOption = (gender) => {
        setQuestionnaire({ ...questionnaire, gender }, setCurrentSection('BudgetPick'))
    }
    return (
        <div className="gender-pick flex justify-center align-center column">
            <div>איך אתה מעדיף שנפנה אלייך?</div>
            <p onClick={() => { onChooseOption("Male") }}>זכר</p>
            <p onClick={() => { onChooseOption("Female") }}>נקבה</p>
            <button onClick={() => { onChooseOption("None") }}>למי אכפת</button>
        </div>
    )
}
