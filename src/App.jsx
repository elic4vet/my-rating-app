import { React, useState } from "react";
import Rating from "./components/Rating.jsx";
import Success from "./components/Success.jsx";
import "./App.css";

function App() {
  const [success, setSuccess] = useState(true);
  const [selectedNumber, setSelectedNumber] = useState(0);

  return (
    <>
      {success ? (
        <Rating setSuccess={setSuccess} setSelectedNumber={setSelectedNumber} />
      ) : (
        <Success
          setSuccess={setSuccess}
          setSelectedNumber={setSelectedNumber} // this is not needed here but is needed in the Success component to reset the rating to 0 when the user clicks the back to home button
        />
      )}
    </>
  );
}

export default App;
