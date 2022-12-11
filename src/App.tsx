import { Routes, Route } from 'react-router-dom';
import { OurCompanyPage, LocationPage, ContactPage, Homepage } from './pages';
import './App.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/our-company" element={<OurCompanyPage />} />
      <Route path="/location" element={<LocationPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
