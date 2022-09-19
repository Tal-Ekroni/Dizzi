import { Route, Routes, useLocation } from 'react-router-dom'
import routes from './routes.js'

import './assets/styles/main.scss'
import { Footer } from './cmps/footer'
import { AppHeader } from './cmps/app-header'
import { headlessPages } from './consts/headless-pages'
import { footerlessPages } from './consts/footerless-pages'

function App() {
  const location = useLocation()

  const isShowHeader = () => {
    return !headlessPages.some((route) => location.pathname.includes(route)) && location.pathname !== '/'
  }

  const isShowFooter = () => {
    return !footerlessPages.some((route) => location.pathname.includes(route))
  }

  return (
    <div className="App" style={{ backgroundColor: location.pathname === '/' ? '#48966c' : '' }}>
      {isShowHeader() && <AppHeader />}
      <Routes>
        {routes.map((route, idx) => {
          if (route.routes) {
            {
              return (
                <>
                  <Route key={idx} path={route.path} element={<route.component />}>
                    {route.routes.map((innerRoute, innerIdx) => (
                      <Route key={innerIdx} path={innerRoute.path} element={<innerRoute.component />} />
                    ))}
                  </Route>
                </>
              )
            }
          } else {
            return <Route key={idx} path={route.path} element={<route.component />} />
          }
        })}
      </Routes>
      {/* {isShowFooter() && <Footer />} */}
    </div>
  )
}

export default App
