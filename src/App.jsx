import { Route, Routes, useLocation } from 'react-router-dom'
import routes from './routes.js'

import './assets/styles/main.scss'
import { Footer } from './cmps/footer'

function App() {
  const location = useLocation()
  return (
    <div className="App" style={{ backgroundColor: location.pathname === '/' ? '#48966c' : '' }}>
      <Routes>
        {routes.map((route, idx) => (
          <Route key={idx} path={route.path} element={<route.component />} />
        ))}
      </Routes>
      <Footer />
    </div>
  )
}

export default App
