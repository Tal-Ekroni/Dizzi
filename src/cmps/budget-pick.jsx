
export default function BudgetPick({ questionnaire, setQuestionnaire, setPage }) {
    const onChooseOption = () => {
        setQuestionnaire({ ...questionnaire, isBudgetMonthly: !questionnaire.isBudgetMonthly })
    }
    return (
        <div className="budget-pick">

            <label className="switch">
                תשלום חד פעמי או חודשי חביבי
                <input type="checkbox" defaultChecked={questionnaire.isBudgetMonthly} onChange={onChooseOption} />
                <span className="slider round"></span>
            </label>
            <button onClick={() => { setPage(3) }}>תקדם</button>

        </div>
        
    )
}
