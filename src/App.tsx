import { Routes, Route } from 'react-router-dom';
import {
  OurCompanyPage,
  LocationPage,
  ContactPage,
  Homepage,
  WebDesignPage,
  AppDesignPage,
  GraphicDesignPage,
} from './pages';
import './App.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/our-company" element={<OurCompanyPage />} />
      <Route path="/location" element={<LocationPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/web-design" element={<WebDesignPage />} />
      <Route path="/app-design" element={<AppDesignPage />} />
      <Route path="/graphic-design" element={<GraphicDesignPage />} />
    </Routes>
  );
}

export default App;
