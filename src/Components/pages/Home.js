import { Button, TextField } from "@material-ui/core";
import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="q_settings">
        <span style={{ fontSize: 30, marginBottom: 20 }}>Quiz Settings</span>
        <TextField
          style={{ marginBottom: 30 }}
          label="Enter Name"
          variant="outlined"
        />{" "}
        <TextField
          select
          style={{ marginBottom: 30 }}
          label="Select Catogary"
          variant="outlined"
        ></TextField>
        <TextField
          select
          style={{ marginBottom: 30 }}
          label="Select Catogary"
          variant="outlined"
        ></TextField>
        <Button style={{ height: 50 }} variant="contained" color="primary">
          Primary
        </Button>
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
