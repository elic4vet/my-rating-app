import React from "react";

function success({ setSuccess }) {
  const changeSuccessState = () => {
    setSuccess(true);
  };
  return (
    <div>
      <p className="result"></p>
      <button className="btn" onClick={() => changeSuccessState()}>
        {" "}
        Back to home{" "}
      </button>
    </div>
  );
}

export default success;
