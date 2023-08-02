import { React, useState } from "react";
import icon from "../assets/images/icon-star.svg";
import "../App.css";

const rating = () => {
  const [selectedNumber, setSelectedNumber] = useState(0);

  const selectNumber = (numberSelected) => {
    setSelectedNumber(numberSelected);
    console.log(numberSelected);
  };

  return (
    <div class="container">
      <div class="card">
        <div class="circle">
          <img src={icon} class="icon" alt="icon" />
        </div>
        <h1>How did we do ? </h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>

        <p> You selected : selectedNumber </p>
        <div class="ratings">
          <div class="circle">
            <button class="one" onClick={selectNumber} value="1">
              1
            </button>
          </div>
          <div class="circle">
            <button class="two" onClick={selectNumber} value="2">
              2
            </button>
          </div>
          <div class="circle">
            <button class="three" onClick={selectNumber} value="3">
              3
            </button>
          </div>
          <div class="circle">
            <button class="four" onClick={selectNumber} value="4">
              4
            </button>
          </div>
          <div class="circle">
            <button class="five" onClick={selectNumber} value="5">
              5
            </button>
          </div>
        </div>

        <button class="submit-btn">Submit - count is </button>
      </div>
      <div class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </div>
  );
};

export default rating;
