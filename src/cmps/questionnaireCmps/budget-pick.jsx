
export default function BudgetPick({ questionnaire, setQuestionnaire, currentSection,setCurrentSection }) {
    const onChooseOption = () => {
        setQuestionnaire({ ...questionnaire, isFullPayment: !questionnaire.isFullPayment })
    }
    return (
        <div className="budget-pick">

            <label className="switch">
                תשלום מלא או חודשי חביבי
                <input type="checkbox" defaultChecked={questionnaire.isFullPayment} onChange={onChooseOption} />
                <span className="slider round"></span>
            </label>
            <button onClick={() => { setCurrentSection('CarType') }}>תקדם</button>

        </div>
        
    )
}
