import React from "react";

function success() {
  const [success, setSuccess] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(0);

  const selectNumber = (numberSelected) => {
    setSelectedNumber(numberSelected);
    let result = document.querySelector(".result");
    result.innerHTML = `You selected ${numberSelected.target.value} out of 5 stars!`;
  };

  return (
    <div>
      <p className="result"></p>
      <button className="btn"> Back to home </button>
    </div>
  );
}

export default success;
