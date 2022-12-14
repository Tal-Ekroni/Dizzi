import { useNavigate } from 'react-router-dom'
import { Logo } from './logo'

export const AppHeader = () => {
  const navigate = useNavigate()

  return (
    <section className="app-header-container">
      <div className="vendor-cta">
        <p>
          מוכרים רכבים חדשים? <span>הצטרפו עכשיו לדיזי</span>
        </p>
      </div>
      <div className="nav-container">
        <nav>
          <ul>
            <li>
              <button onClick={() => navigate(-1)}>⇨ חזור</button>
            </li>
            <li>
              <Logo />
            </li>
            <li>
              <button onClick={() => navigate('/')}>חיפוש חדש</button>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  )
}
