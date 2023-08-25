import React,{ useState } from "react";

function RadioButton() {
    
    const [selectedOption, setSelectedOption] = useState("");

    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
  };
  
  return (
    <div className="radio-container">
      <label>
        <input
          type="radio"
          value="PIT Data"
          checked={selectedOption === "PIT Data"}
          onChange={handleOptionChange}
        />
        PIT Data
      </label>
      <label>
        <input
          type="radio"
          value="Payement Details"
          checked={selectedOption === " Payment Details"}
          onChange={handleOptionChange}
        />
        Payement Details
      </label>
      <label>
        <input
          type="radio"
          value="Agreements"
          checked={selectedOption === "Agreements"}
          onChange={handleOptionChange}
        />
        Agreements
      </label>
    </div>
  );
}

export default RadioButton