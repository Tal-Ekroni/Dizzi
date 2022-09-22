import { useNavigate } from 'react-router-dom'
// import logo from '/'

export const Logo = () => {
  const navigate = useNavigate()
  const goToHomePage = () => {
    navigate('/')
  }

  return <img className="logo-container" src={'/assets/imgs/questionnaireSvgs/logo.svg'} alt="logo" onClick={goToHomePage} />
}
