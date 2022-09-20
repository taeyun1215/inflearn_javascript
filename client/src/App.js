import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';

import Auth from "./hoc/auth";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Auth SpecificComponent={LandingPage} option={null} />} />
          <Route exact path="/login" element={<Auth SpecificComponent={LoginPage} option={false} />} />
          <Route exact path="/register" element={<Auth SpecificComponent={RegisterPage} option={false} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;