import React from "react";
import "./App.css";
import Header from "./Components/header/Header";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/pages/Home";
import Quiz from "./Components/pages/Quiz";
import Result from "./Components/pages/Result";
import Footer from "./Components/footer/Footer";

function App() {
  return (
    <>
      <div className="app">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
