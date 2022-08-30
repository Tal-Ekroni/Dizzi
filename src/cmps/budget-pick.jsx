
export default function BudgetPick({ Questionnaire, setQuestionnaire, setPage }) {
    const onChooseOption = () => {
        setQuestionnaire({ ...Questionnaire, isBudgetMonthly: !Questionnaire.isBudgetMonthly })
    }
    return (
        <>
            <label class="switch">
                תשלום חד פעמי או חודשי חביבי
                <input type="checkbox" defaultChecked={Questionnaire.isBudgetMonthly} onChange={onChooseOption} />
                <span class="slider round"></span>
            </label>
            <button onClick={() => { setPage(3) }}>תקדם</button>

        </>
    )
}
