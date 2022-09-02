import { useNavigate } from 'react-router-dom';

export default function GearboxPick({ questionnaire, setQuestionnaire }) {
    const navigate = useNavigate();

    const onChooseOption = (gearboxType) => {
        setQuestionnaire({ ...questionnaire, gearboxType }, navigate('/results'))
    }
    return (
        <div className="gearbox-pick">
            <div>איך אתה מעדיף שנפנה אלייך?</div>
            <p onClick={() => { onChooseOption("Auto") }}>גיר ידני</p>
            <p onClick={() => { onChooseOption("Manual") }}>גיר אוטומטי</p>
            <button onClick={() => { onChooseOption("Both") }}>לא חשוב לי</button>
        </div>
    )
}
