
export default function FeaturePick({ questionnaire, setQuestionnaire, setPage }) {
    const onChooseOption = (feature) => {
        let stateCarFeatures = [...questionnaire.threeImportantFeaturs]
        stateCarFeatures = stateCarFeatures.includes(feature) ? stateCarFeatures.filter(i => i !== feature) : [feature, ...questionnaire.threeImportantFeaturs]
        if (stateCarFeatures.length > 3) {
            console.log('no no no i said only 3');
            return
        }
        setQuestionnaire({ ...questionnaire, threeImportantFeaturs: [...stateCarFeatures] })
    }
    const carFeatures = ['בטיחות', 'ביצועים', 'חיסכון בדלק', 'אבזור', 'מרחב', 'תא מטען גדול', 'נוחות', 'רכב גבוה']
    return (
        <div className="features-pick">
            <p>מה חשוב לך ברכב?</p>
            <small>ניתן לבחור עד 3 מאפיינים</small>

            <div className="features-container">
                {
                    carFeatures.map((feature, idx) => {
                        return <span
                            key={idx}
                            onClick={() => { onChooseOption(feature) }}
                        >{feature}</span>
                    })
                }
            </div>

            <button onClick={() => { setPage(5) }}>תקדם</button>

        </div>

    )
}
