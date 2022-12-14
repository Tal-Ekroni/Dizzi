import homepageCar from '../../assets/img/questionnaireSvgs/homepageCar.svg'
import { Logo } from '../logo'
export default function HomePage({ setCurrentSection }) {
  return (
    <div className="home-page">
      <Logo />
      <p className="logo-subtitle">מתאים לך בול</p>
      <section className="intro-container">
        <h1>ברוכים הבאים לדיזי</h1>
        <h3>
          האתר הישראלי הראשון להתאמה <span>אישית של רכבים חדשים</span>
        </h3>
        <p>השיבו בזריזות על מספר שאלות וקבלו את הרכבים המושלמים עבורכם.</p>
      </section>
      <button
        onClick={() => {
          setCurrentSection('GenderPick')
        }}
      >
        יוצאים לדרך
      </button>
      <img src={homepageCar} alt="" className="homepage-car" />
    </div>
  )
}
