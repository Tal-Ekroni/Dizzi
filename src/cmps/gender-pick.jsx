export default function GenderPick({ questionnaire, setQuestionnaire, setPage }) {
    const onChooseOption = (gender) => {
        console.log(questionnaire);
        setQuestionnaire({ ...questionnaire, gender }, setPage(2))
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
