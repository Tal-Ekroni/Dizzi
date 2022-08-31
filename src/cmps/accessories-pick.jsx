
export default function AccessoriesPick({ questionnaire, setQuestionnaire, setPage }) {
    const onChooseOption = (accessory) => {
        let stateCarAccessories = [...questionnaire.importantAccessories]
        stateCarAccessories = stateCarAccessories.includes(accessory) ? stateCarAccessories.filter(i => i !== accessory) : [accessory, ...questionnaire.importantAccessories]
        setQuestionnaire({ ...questionnaire, importantAccessories: [...stateCarAccessories] })
    }
    const carAccessories = ['גלגלי מגנזיום', 'מערכת מולטימדיה', 'CAR PLAY', 'גג פנורמי/נפתח', 'ריפודי עור', 'לוח מחוונים דיגטלי', 'כניסה והנעה ללא מפתח', 'בלם יד חשמלי']
    return (
        <div className="accessories-pick">
            <p>מה מהדברים הבאים חשובים לך מבחינת אבזור?</p>

            <div className="accessories-container">
                {
                    carAccessories.map((accessory, idx) => {
                        return <span
                            key={idx}
                            onClick={() => { onChooseOption(accessory) }}
                        >{accessory}</span>
                    })
                }
            </div>

            <button onClick={() => { setPage(6) }}>תקדם</button>

        </div>

    )
}
