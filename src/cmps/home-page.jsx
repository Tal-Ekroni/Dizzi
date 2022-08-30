export default function HomePage({setPage}) {
   
    return (
    <div className="home-page flex column justify-center align-center">
    ברוכים הבאים!
    <p>תתחילו למלא כבר כפרה עליכם</p>

        <button onClick={()=>{setPage(1)}}>תקדם</button>
    </div>
    )
}
