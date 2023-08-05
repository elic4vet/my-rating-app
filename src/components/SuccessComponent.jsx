const SuccessComponent = ({ img, selectedNumber }) => {
  return (
    <div className="successComponent">
      <div>
        <img src={img}></img>
        <p className="result">You selected {selectedNumber} out of 5</p>
        <h1>Thank you !</h1>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </div>
  );
};

export default SuccessComponent;
