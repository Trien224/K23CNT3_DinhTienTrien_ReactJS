import React, { useState } from "react";

const DttFrom4 = () => {
  const [selectedFruits, setSelectedFruits] = useState(["Quả táo"]);

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
      <h4 class='mt-3' > Nhập biểu mẫu - Chọn nhiều </h4>
      <h5>Chọn loại trái cây bạn yêu thích</h5>
        <form onSubmit={handleSubmit}>
        {["Quả táo", "Chuối", "Quả cam"].map((fruit) => (
           <div key={fruit}>
            <input className='alert alert-light mx-2'
              type="radio"
              id={fruit}
              value={fruit}
              checked={selectedFruits.includes(fruit)}
              onChange={handleCheckboxChange}
            />
            <label htmlFor={fruit}>{fruit}</label>
          </div>
        ))}
        <button type="submit" className=" btn btn-info">
          Chọn
        </button>
      </form>
    </div>
  );
};

export default DttFrom4;
