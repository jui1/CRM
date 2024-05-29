import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EnquiryForm from "./component/EnquiryForm.jsx";

import Admin from './component/Admin';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<EnquiryForm />} />
          <Route path="/admin" element={<Admin />} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
