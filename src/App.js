// App.js
import React from "react";
import { HashRouter  as Router, Route, Routes } from 'react-router-dom';

import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import ProjectsPage from "./components/ProjectsPage";
import AboutPage from "./components/AboutPage";
import "./App.css"; // Import your CSS file for styling

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<LandingPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
            {/* Add more routes for additional pages */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
