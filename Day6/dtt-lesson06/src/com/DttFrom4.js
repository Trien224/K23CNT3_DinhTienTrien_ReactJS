import React, { useState } from "react";

const DttFrom4 = () => {
  const [selectedFruits, setSelectedFruits] = useState(["Apple"]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setSelectedFruits((prev) =>
      checked ? [...prev, value] : prev.filter((fruit) => fruit !== value)
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Trái cây bạn chọn gồm: ${selectedFruits.join(", ")}`);
  };

  return (
    <div>
      <h4 class='mt-3' >Form input - Checkbox</h4>
      <form onSubmit={handleSubmit}>
        <h5>Select your favorite fruits</h5>
        {["Apple", "Banana", "Orange"].map((fruit) => (
           <div key={fruit}>
            <input className='alert alert-light'
              type="checkbox"
              id={fruit}
              value={fruit}
              checked={selectedFruits.includes(fruit)}
              onChange={handleCheckboxChange}
            />
            <label htmlFor={fruit}>{fruit}</label>
          </div>
        ))}
        <button type="submit" className="mx-3 btn btn-info">
          Submit
        </button>
      </form>
    </div>
  );
};

export default DttFrom4;
