import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigation } from './components/navigation';
import { Home } from './components/home';
import { Experience } from './components/experience';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className='App'>
        <header>
          <Navigation />
        </header>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/experience' element={<Experience />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
