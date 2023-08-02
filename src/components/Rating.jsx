import { React, useState } from "react";
import icon from "../assets/images/icon-star.svg";
import "../App.css";

const rating = () => {
  const [count, setCount] = useState(0);

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
        <div class="ratings">
          <div class="circle">
            <div class="one" value={1}>
              1
            </div>
          </div>
          <div class="circle">
            <div class="two" value={2}>
              2
            </div>
          </div>
          <div class="circle">
            <div class="three" value={3}>
              3
            </div>
          </div>
          <div class="circle">
            <div class="four" value={4}>
              4
            </div>
          </div>
          <div class="circle">
            <div class="five" value={5}>
              5
            </div>
          </div>
        </div>

        <button
          onClick={() => setCount((count) => count + 1)}
          class="submit-btn"
        >
          Submit - count is {count}
        </button>
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
