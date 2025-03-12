import React, { useState } from "react";

const DttProductAdd = ({ onAddProduct }) => {
  const [product, setProduct] = useState({
    DttpID: "",
    DttpName: "",
    DttpQuantity: "",
    DttpPrice: "",
  });
  
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate Price and Quantity
    if (product.DttpQuantity <= 0 || product.DttpPrice <= 0) {
      setErrorMessage("Số số lượng và Giá  phải lớn hơn 0.");
      return;
    }

    // Call onAddProduct only if the ID is unique
    if (onAddProduct(product)) {
      setProduct({
        DttpID: "",
        DttpName: "",
        DttpQuantity: "",
        DttpPrice: "",
      });
      setErrorMessage(""); // Reset error message
    } else {
      setErrorMessage("ID Sản phẩm đã tồn tại.");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Thêm Sản phẩm mới</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="DttpID" className="form-label">
            ID Sản phẩm:
          </label>
          <input
            type="text"
            className="form-control"
            id="DttpID"
            name="DttpID"
            value={product.DttpID}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="DttpName" className="form-label">
            Tên Sản phẩm:
          </label>
          <input
            type="text"
            className="form-control"
            id="DttpName"
            name="DttpName"
            value={product.DttpName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="DttpQuantity" className="form-label">
           Số số lượng:
          </label>
          <input
            type="number"
            className="form-control"
            id="DttpQuantity"
            name="DttpQuantity"
            value={product.DttpQuantity}
            onChange={handleChange}
            required
            min="1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="DttpPrice" className="form-label">
           Giá :
          </label>
          <input
            type="number"
            className="form-control"
            id="DttpPrice"
            name="DttpPrice"
            value={product.DttpPrice}
            onChange={handleChange}
            required
            min="1"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Thêm Sản phẩm
        </button>
      </form>
      {errorMessage && <p className="text-danger mt-2">{errorMessage}</p>}
    </div>
  );
};

export default DttProductAdd;
