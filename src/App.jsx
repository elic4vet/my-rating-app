import { React, useState } from "react";
import Rating from "./components/Rating.jsx";
import Success from "./components/Success.jsx";
import "./App.css";

function App() {
  const [success, setSuccess] = useState(true);

  return (
    <>
      {success ? (
        <Rating setSuccess={setSuccess} />
      ) : (
        <Success setSuccess={setSuccess} />
      )}
    </>
  );
}

export default App;
