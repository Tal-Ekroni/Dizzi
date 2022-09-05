import logo from '../assets/img/logo-demo.JPG'

export const AppHeader = () => {
  return (
    <section className="app-header">
      <div className="vendor-cta">
        <p>
          מוכרים רכבים חדשים? <span>הצטרפו עכשיו לדיזי</span>
        </p>
      </div>
      <div className="nav-container">
        <nav>
          <ul>
            <li>
              <button>חזור</button>
            </li>
            <li>
              <img src={logo} alt="website logo" />
            </li>
            <li>
              <button>חיפוש חדש</button>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  )
}
