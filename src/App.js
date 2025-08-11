import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./Homepage";
import WelcomePage from "./WelcomePage";
import WelcomePage1 from "./WelcomePage1";

function App() {
  return (
    <Router basename="/healing">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/welcome1" element={<WelcomePage1 />} />
      </Routes>
    </Router>
  );
}

export default App;
