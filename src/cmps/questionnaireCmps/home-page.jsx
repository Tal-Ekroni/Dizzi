export default function HomePage({setCurrentSection}) {
    return (
    <div className="home-page">
    ברוכים הבאים!
    <p>תתחילו למלא כבר כפרה עליכם</p>

        <button onClick={()=>{setCurrentSection('GenderPick')}}>תקדם</button>
    </div>
    )
}
