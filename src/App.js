import { Route, Routes } from 'react-router-dom'
import routes from './routes.js'

import './assets/styles/main.scss';
import { Footer } from './cmps/results/footer';


function App() {
  return (
    <div className="App">
      <Routes>
        {routes.map((route, idx) => (
          <Route key={idx} path={route.path} element={<route.component />} />
        ))}
      </Routes>
      <Footer isFull={true} />
    </div>
  );
}

export default App;
