
import { Route, Routes, useLocation } from 'react-router-dom';
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
import AddQA from './components/admin-panel/AddQA'; // Import AddQA component
import DoctorDashboard from './components/DoctorDashboard';
import Patients from './components/Patient/Patients';
import PatientDetails from './components/Patient/PatientDetails';
import PatientProfile from './components/Patient/PatientProfile';
import LanguagePreference from './components/Questions/LanguagePreference';
import BeginExam from './components/Questions/BeginExam';
import PatientDashboard from './components/Patient/PatientDashboard';
import TestCompletion from './components/Questions/TestCompletion';

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  const isDashboardRoute = location.pathname === '/dashboard' || location.pathname === '/patients';
  const isQuestionRoute = location.pathname.startsWith('/questions');
  const shouldHideNavbarFooter = isAdminRoute || isDashboardRoute || isQuestionRoute;

  return (
    <div className="App bg-white text-black font-inter ">
      {!shouldHideNavbarFooter && <Navbar />}
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
        <Route path="/admin/patient-details" element={<PatientDetails />} />
        <Route path="/admin/add-qa" element={<AddQA />} />
        <Route path="/patient-profile" element={<PatientProfile />} />
        <Route path="/patient/dashboard" element={<PatientDashboard />} />
        <Route path="/questions/test-completion" element={<TestCompletion />} />
        <Route path="/questions/language-preference" element={<LanguagePreference />} />
        <Route path="/questions/begin-exam" element={<BeginExam />} />
      </Routes>
      {!shouldHideNavbarFooter && <Footer />}
    </div>
  );
}

export default App;
