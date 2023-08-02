import "./App.css";
import { React, useState } from "react";
import Rating from "./components/Rating.jsx";
import Success from "./components/Success";

function App() {
  const [success, setSuccess] = useState(true);
  const [email, setEmail] = useState("");
  return (
    <>
      {success ? (
        <Rating setSuccess={setSuccess} setEmail={setEmail} email={email} />
      ) : (
        <Success email={email} setSuccess={setSuccess} />
      )}
    </>
  );
}

export default App;
