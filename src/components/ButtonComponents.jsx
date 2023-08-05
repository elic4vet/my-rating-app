const btnArrays = ["1", "2", "3", "4", "5"];

const ButtonComponent = ({ selectedNumber, handleClick }) => {
  return btnArrays.map((value, index) => {
    return (
      <div className="circle" key={index}>
        <button
          className={selectedNumber === value ? "selected" : ""}
          onClick={handleClick}
          value={value}
        >
          {value}
        </button>
      </div>
    );
  });
};

export default ButtonComponent;
