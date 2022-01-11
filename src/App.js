import React, { useState } from "react";
import "./App.css";
import Header from "./Components/header/Header";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/pages/Home";
import Quiz from "./Components/pages/Quiz";
import Result from "./Components/pages/Result";
import Footer from "./Components/footer/Footer";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState();
  const fetchQuestions = async (Category, Difficulty) => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        Category && `&category=${Category}`
      }${Difficulty && `&difficulty=${Difficulty}`}&type=multiple`
    );
    setQuestions(data.results);
  };
  return (
    <>
      <div className="app">
        <Router>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  name={name}
                  setName={setName}
                  fetchQuestions={fetchQuestions}
                />
              }
            />
            <Route
              path="/quiz"
              element={
                <Quiz
                  name={name}
                  score={score}
                  questions={questions}
                  setScore={setScore}
                  setQuestions={setQuestions}
                />
              }
            />
            <Route path="/result" element={<Result />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
