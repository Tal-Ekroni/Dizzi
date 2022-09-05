import { useLocation } from 'react-router-dom'
import logo from '../assets/img/logo-demo.JPG'

export const Footer = () => {
  const location = useLocation()
  const nav = ['בואו נכיר לעומק', 'תקנון אתר', 'מדניות שימוש', 'הצהרת נגישות', 'צור קשר']

  return (
    <footer className={`${location.pathname.includes('/results') ? 'full' : ''}`}>
      <div className="footer-inner">
        <div className="logo-container">
          <img src={logo} alt="" />
        </div>
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
