import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";
import CategorySelection from "./components/CategorySelection";

const App = () => {
  return (
    <div className="app_page">
      <Router>
        <Routes>
          <Route path="/" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/category" element={<CategorySelection />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
