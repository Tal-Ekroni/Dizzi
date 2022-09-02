import { questionnaireDynamicCmps as cmpsData } from "../../services/demo-data.service"

export default function DynamicQuestionnaireCmp({ questionnaire, setQuestionnaire, currentSection, setCurrentSection }) {
    const section = cmpsData[currentSection]
    const onChooseOption = (userPick) => {
        let currentUserPicks = [...questionnaire[section.stateName]]
        currentUserPicks = currentUserPicks.includes(userPick) ? currentUserPicks.filter(i => i !== userPick) : [userPick, ...questionnaire[section.stateName]]
        if (section.isLimitedPicks && currentUserPicks.length > 3) {
            return
        }
        setQuestionnaire({ ...questionnaire, [section.stateName]: [...currentUserPicks] })
    }
    return (
        <div className={section.cmpClassName}>
            <p>{section.header}</p>
            {section.subHeader && <small>{section.subHeader}</small>}
            <div className={section.containerClassName}>
                {
                    section.data.map((item, idx) => {
                        return <span
                            key={idx}
                            onClick={() => { onChooseOption(item) }}
                        >{item}</span>
                    })
                }
            </div>
            <button onClick={() => { setCurrentSection(section.nextSection) }}>תקדם</button>
        </div>

    )
}
