import React, { useState } from "react";
import icon from "../assets/images/icon-star.svg";
import img from ".././assets/images/illustration-thank-you.svg";
import "../App.css";

const rating = () => {
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [success, setSuccess] = useState(false);
  const [isActive, setActive] = useState("");

  const handleClick = (numberSelected) => {
    setSelectedNumber(numberSelected);
    setActive(!isActive);
  };

  const handleSubmit = () => {
    if (selectedNumber === 0) {
      alert("Please select a rating!");
    } else {
      setSuccess(true);
    }
  };

  let successComponent = null;
  let rating_app = document.querySelector(".rating_app");
  let submit_btn = document.querySelector(".submit-btn");

  if (success) {
    successComponent = (
      <div>
        <img src={img}></img>
        <p className="result">
          You selected {selectedNumber.target.value} out of 5
        </p>
        <h1>Thank you !</h1>
        <p>
          {" "}
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    );
    rating_app.style.display = "none";
    submit_btn.style.display = "none";
  }

  return (
    <div className="container">
      <div className="card">
        <div className="successComponent">{successComponent}</div>
        <div className="rating_app">
          <img src={icon} className="icon" alt="icon" />

          <h1>How did we do ? </h1>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>

          <p className="results"></p>
          <div className="ratings">
            <div className="circle">
              <button
                key={1}
                className={isActive ? "selected" : ""}
                onClick={handleClick}
                id={"1"}
                value="1"
              >
                1
              </button>
            </div>
            <div className="circle">
              <button
                key={2}
                className={isActive ? "selected" : ""}
                onClick={handleClick}
                id={"2"}
                value="2"
              >
                2
              </button>
            </div>
            <div className="circle">
              <button
                key={3}
                className={isActive ? "selected" : ""}
                onClick={handleClick}
                id={"3"}
                value="3"
              >
                3
              </button>
            </div>
            <div className="circle">
              <button
                key={4}
                className={isActive ? "selected" : ""}
                onClick={handleClick}
                id={"4"}
                value="4"
              >
                4
              </button>
            </div>
            <div className="circle">
              <button
                key={5}
                className={isActive ? "selected" : ""}
                onClick={handleClick}
                id={"5"}
                value="5"
              >
                5
              </button>
            </div>
          </div>
        </div>
        <button className="submit-btn" onClick={handleSubmit}>
          Submit{" "}
        </button>
      </div>

      <div className="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>{" "}
        Coded by{" "}
        <a href="https://www.linkedin.com/in/eerkekoglou/">
          {" "}
          Elisabeth Erkekoglou
        </a>
      </div>
    </div>
  );
};

export default rating;
