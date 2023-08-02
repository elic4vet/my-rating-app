import { React, useState } from "react";
import icon from "../assets/images/icon-star.svg";
import "../App.css";

const rating = () => {
  const [count, setCount] = useState(0);
  return (
    <div class="container">
      <div class="card">
        <img src={icon} class="icon" alt="icon" />
        <h1>How did we do ? </h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <ul class="ratings">
          <li> 1 </li>
          <li> 2 </li>
          <li> 3 </li>
          <li> 4 </li>
          <li> 5 </li>
        </ul>
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
