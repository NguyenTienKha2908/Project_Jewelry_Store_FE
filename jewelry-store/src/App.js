
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";

const App = () => {
  return (
    <Router>
      <Header/>
      <div className="page-container">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/loginPage" element={<LoginPage />}></Route>
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
};

export default App;
