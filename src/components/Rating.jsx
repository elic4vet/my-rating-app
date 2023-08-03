import { React, useState } from "react";
import icon from "../assets/images/icon-star.svg";
import "../App.css";

const rating = () => {
  const [selectedNumber, setSelectedNumber] = useState(0);
  const selectNumber = (numberSelected) => {
    setSelectedNumber(numberSelected);
    let result = document.querySelector(".result");
    result.innerHTML = `You selected ${numberSelected.target.value} out of 5 stars!`;
  };

  return (
    <div className="container">
      <div className="card">
        <img src={icon} className="icon" alt="icon" />

        <h1>How did we do ? </h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>

        <p className="result"> </p>
        <div className="ratings">
          <div className="circle">
            <button className="one" onClick={selectNumber} value="1">
              1
            </button>
          </div>
          <div className="circle">
            <button className="two" onClick={selectNumber} value="2">
              2
            </button>
          </div>
          <div className="circle">
            <button className="three" onClick={selectNumber} value="3">
              3
            </button>
          </div>
          <div className="circle">
            <button className="four" onClick={selectNumber} value="4">
              4
            </button>
          </div>
          <div className="circle">
            <button className="five" onClick={selectNumber} value="5">
              5
            </button>
          </div>
        </div>

        <button className="submit-btn">Submit </button>
      </div>
      <div className="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>{" "}
        Coded by <a href="#"> Elisabeth Erkekoglou</a>
      </div>
    </div>
  );
};

export default rating;
