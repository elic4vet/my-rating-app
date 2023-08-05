import { useState } from "react";
import icon from "../assets/images/icon-star.svg";
import img from ".././assets/images/illustration-thank-you.svg";
import "../App.css";
import ButtonComponent from "./ButtonComponents";
import SuccessComponent from "./SuccessComponent";

const Rating = () => {
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [success, setSuccess] = useState(false);

  const handleClick = (event) => {
    setSelectedNumber(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedNumber.length === 0) {
      alert("Please select a rating!");
    } else {
      setSuccess(true);
    }
  };

  return (
    <div className="container">
      <div className="card">
        {success ? (
          <SuccessComponent img={img} selectedNumber={selectedNumber} />
        ) : (
          <>
            <div className="rating_app">
              <img src={icon} className="icon" alt="icon" />

              <h1>How did we do ? </h1>
              <p>
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
              </p>

              <p className="results"></p>
              <div className="ratings">
                {
                  <ButtonComponent
                    handleClick={handleClick}
                    selectedNumber={selectedNumber}
                  />
                }
              </div>
            </div>
            <button className="submit-btn" onClick={handleSubmit}>
              Submit{" "}
            </button>
          </>
        )}
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

export default Rating;
