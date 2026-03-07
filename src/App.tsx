import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Footer from './components/layout/Footer';



function App() {
  return (
    <Router>
      
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} /> 
             
            </Routes>
          </main>
          <Footer />
         
        </div>
      
    </Router>
  );
}

export default App;