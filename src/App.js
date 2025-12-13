
import { Route, Routes, useLocation } from 'react-router';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import PatientEnq from './components/admin-panel/PatientEnq';
import DoctorDashboard from './components/DoctorDashboard';
import Patients from './components/Patient/Patients';

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="App bg-white text-black font-inter ">
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin/patient-enquiries" element={<PatientEnq />} />
        <Route path="/admin/dashboard" element={<DoctorDashboard />} />
        <Route path="/admin/patients" element={<Patients />} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </div>
  );
}

export default App;
