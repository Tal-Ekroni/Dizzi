import { useNavigate } from 'react-router-dom'
// import logo from '../assets/img/logo-demo.JPG'

export const Logo = () => {
  const navigate = useNavigate()
  const goToHomePage = () => {
    navigate('/')
  }

  return (
    <div className="logo-container" onClick={goToHomePage}>
      <img src={'assets/imgs/questionnaireSvgs/logo.svg'} alt="logo" />
    </div>
  )
}
