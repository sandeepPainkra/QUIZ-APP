import { Button, MenuItem, TextField } from "@material-ui/core";
import React, { useState } from "react";
import "./Home.css";
import Categories from "../Data/Catogaries";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useNavigate } from "react-router-dom";
const Home = ({ name, setName, fetchQuestions }) => {
  const [Category, setCategory] = useState("");
  const [Difficulty, setDifficulty] = useState("");
  const [Error, setError] = useState(false);
  const navigate = useNavigate();

  const HandelClick = () => {
    if (!Category || !Difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(Category, Difficulty);
      navigate("/quiz");
      return;
    }
  };
  return (
    <div className="home">
      <div className="q_settings">
        <span style={{ fontSize: 30, marginBottom: 20 }}>Quiz Settings</span>
        <form action="">
          {Error && <ErrorMessage>Fill all the fields</ErrorMessage>}
          <TextField
            style={{ marginBottom: 30, marginTop: 10 }}
            label="Enter Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            select
            style={{ marginBottom: 30 }}
            label="Select Catogary"
            variant="outlined"
            onChange={(e) => setCategory(e.target.value)}
            value={Category}
          >
            {Categories.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            style={{ marginBottom: 30 }}
            label="Select Catogary"
            variant="outlined"
            onChange={(e) => setDifficulty(e.target.value)}
            value={Difficulty}
          >
            <MenuItem key="easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
          <Button
            onClick={HandelClick}
            style={{ height: 50 }}
            variant="contained"
            color="primary"
          >
            Primary
          </Button>
        </form>
      </div>
      <div className="banner">
        <img
          className="home_image"
          src="https://intuitive-quiz-hub.netlify.app/quiz.svg"
          alt="home image"
        />
      </div>
    </div>
  );
};

export default Home;
