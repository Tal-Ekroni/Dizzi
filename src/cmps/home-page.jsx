export default function HomePage({setPage}) {
   
    return (
    <div className="home-page">
    ברוכים הבאים!
    <p>תתחילו למלא כבר כפרה עליכם</p>

        <button onClick={()=>{setPage(1)}}>תקדם</button>
    </div>
    )
}
