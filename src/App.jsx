
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Scrollable One-page layout */}
        <Route path="/" element={<Home />} />
        {/* Individual routes for each esction */}
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
