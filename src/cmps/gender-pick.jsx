export default function GenderPick({ Questionnaire, setQuestionnaire, setPage }) {
    const onChooseOption = (gender) => {
        setQuestionnaire({ ...Questionnaire, gender }, setPage(2))
    }
    return (
        <div className="gender-pick flex justify-center align-center column">
            <div>איך אתה מעדיף שנפנה אלייך?</div>
            <p onClick={() => {onChooseOption("Male") }}>זכר</p>
            <p onClick={() => {onChooseOption("Female") }}>נקבה</p>
            <p onClick={() => { onChooseOption("None")}}>למי אכפת</p>
            <button onClick={() => { setPage(2) }}>תקדם</button>
        </div>
    )
}
