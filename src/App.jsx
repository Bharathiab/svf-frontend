import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
const ConstructionPackage = lazy(() => import('./components/ConstructionPackage'));
import OurTeam from './components/OurTeam.jsx';
import OurWorks from './components/OurWorks';
import './App.css';
import Interior from './components/Interior';
import DesignPackage from './components/DesignPackage';
import ContactUs from './components/ContactUs';


function App() {
  return (
    <>
      <style>
        {`
          body {
            margin: 0;
          }
        `}
      </style>
      <Router>
        <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/construction-package" element={<ConstructionPackage />} />
            <Route path="/ourteam" element={<OurTeam />} />
            <Route path="/ourworks" element={<OurWorks />} />
            <Route path="/interior" element={<Interior/>}/>
            <Route path="/design-package" element={<DesignPackage/>}/>
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
