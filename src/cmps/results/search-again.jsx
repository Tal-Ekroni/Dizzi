import { useNavigate } from 'react-router-dom'

export const SearchAgain = () => {
  const navigate = useNavigate()
  return (
    <section className="search-again">
      <h3>מתחשק לך לחפש רכב אחר?</h3>
      <button onClick={() => navigate('/')}>
        יאללה, בואו נעשה <span>חיפוש חדש</span>
      </button>
      <p>עזור לנו להשתפר. חושב שהתוצאות לא מתאימות לך? אנחנו רוצים לשמוע!</p>
    </section>
  )
}
