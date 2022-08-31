
export default function TypePick({ questionnaire, setQuestionnaire, setPage }) {
    const onChooseOption = (carType) => {
        let stateCarTypes = [...questionnaire.carTypes]
        stateCarTypes = stateCarTypes.includes(carType) ? stateCarTypes.filter(i => i !== carType) : [carType, ...questionnaire.carTypes]
        setQuestionnaire({ ...questionnaire, carTypes: [...stateCarTypes] })
    }

    const carTypes = ['מנהלים', 'משפחתי', 'קטן', 'פנאי ושטח', 'מסחרי', 'ספורט', 'יוקרה', 'מיניואן']
    return (
        <div className="type-pick">
            <p>איזה סוג רכב אתה מעדיף?</p>
            <small>*ניתן לבחור יותר מסוג אחד</small>
            <div className="types-container">
                {
                    carTypes.map((carType, idx) => {
                        return <span
                            key={idx}
                            onClick={() => { onChooseOption(carType) }}
                        >{carType}</span>
                    })
                }
            </div>
            <button onClick={() => { setPage(4) }}>תקדם</button>

        </div>

    )
}
