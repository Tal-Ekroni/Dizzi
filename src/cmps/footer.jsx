import { useLocation } from 'react-router-dom'
import { Logo } from './logo'

export const Footer = () => {
  const location = useLocation()
  const nav = ['בואו נכיר לעומק', 'תקנון אתר', 'מדניות שימוש', 'הצהרת נגישות', 'צור קשר']

  return (
    <footer className={`${location.pathname.includes('/results') ? 'full' : ''}`}>
      <div className="footer-inner">
        {location.pathname !== '/' && <Logo />}
        <nav>
          <h4>ניווט</h4>
          <ul>
            {nav.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </nav>
        <button>חיפוש חדש</button>
        <p>כל הזכויות שמורות לדיזי 2022</p>
      </div>
    </footer>
  )
}
