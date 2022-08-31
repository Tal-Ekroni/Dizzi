
export default function LuggagePick({ questionnaire, setQuestionnaire, setPage }) {
    const onChooseOption = (feature) => {
        let stateCarLuggage = [...questionnaire.luggageTypes]
        stateCarLuggage = stateCarLuggage.includes(feature) ? stateCarLuggage.filter(i => i !== feature) : [feature, ...questionnaire.luggageTypes]
        setQuestionnaire({ ...questionnaire, luggageTypes: [...stateCarLuggage] })
    }
    const carLuggage = ['גלגלי מגנזיום', 'מערכת מולטימדיה', 'CAR PLAY', 'גג פנורמי/נפתח', 'ריפודי עור', 'לוח מחוונים דיגטלי', 'כניסה והנעה ללא מפתח', 'בלם יד חשמלי']
    return (
        <div className="luggage-pick">
            <p>סמן את הדברים שתרצה להכניס לרכב</p>
            <small>*ניתן לבחור יותר מפריט אחד</small>
            <div className="luggage-container">
                {
                    carLuggage.map((luggage, idx) => {
                        return <span
                            key={idx}
                            onClick={() => { onChooseOption(luggage) }}
                        >{luggage}</span>
                    })
                }
            </div>

            <button onClick={() => { setPage(7) }}>תקדם</button>

        </div>

    )
}
