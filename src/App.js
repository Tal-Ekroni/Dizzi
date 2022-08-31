import './assets/styles/main.scss';
import { Footer } from './cmps/results/footer';

import { Results } from './pages/results';

function App() {
  return (
    <div className="App">
      <Results />
      <Footer isFull={true} />
    </div>
  );
}

export default App;
