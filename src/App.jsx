import { React, useState } from "react";
import Rating from "./components/Rating.jsx";
import Success from "./components/Success.jsx";
import "./App.css";

function App() {
  const [success, setSuccess] = useState(true);
  const [selectedNumber, setSelectedNumber] = useState(0);

  return (
    <>
      <Rating />
    </>
  );
}

export default App;
