import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Footer from './components/layout/Footer';
import AdminDashboard from './components/admin/AdminDashboard';



function App() {
  return (
    <Router>  
      
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} /> 
              {/* admin dashboard */}
             <Route path='/admin-dashboard' element={<AdminDashboard />} />
             
            </Routes>
          </main>
          <Footer />
         
        </div>
      
    </Router>
  );
}

export default App;