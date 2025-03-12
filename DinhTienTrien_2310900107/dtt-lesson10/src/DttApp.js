import React, { useState } from "react";
import DttProductList from "./com/DttProductList";
import DttProductAdd from "./com/DttProductAdd";
import './App.css';

const DttApp = () => {
  const [DttProduct, DttSetProduct] = useState([
    {
      DttpID: "2310900107",
      DttpName: "Dinh Tien Trien",
      DttpQuantity: 1,
      DttpPrice: 100,
    },
    {
      DttpID: "20173283",
      DttpName: "Nguyen van a",
      DttpQuantity: 11,
      DttpPrice: 250000,
    },
    {
      DttpID: "3483748",
      DttpName: "Nguyen van b",
      DttpQuantity: 10,
      DttpPrice: 44000,
    },
  ]);

  const DttHandleAddProduct = (newProduct) => {
    // Check if product ID already exists
    if (DttProduct.some((product) => product.DttpID === newProduct.DttpID)) {
      return false; // Duplicate ID, don't add the product
    }
    DttSetProduct((prevProducts) => [...prevProducts, newProduct]);
    return true; // Successfully added
  };

  return (
    <div className="container text text-light alert mt-1">
        <h1 className="text-center alert alert-warning">
          Đinh Tiến Triển - K23CNT3 - Mini Project1
        </h1>
          <section className="container-fluid mt-3">
              <div className="col-lg-7 grid-margin stretch-card">
                <div className="card">
                <DttProductList products={DttProduct} />
                </div>
              </div>
              <div className="col-5 grid-margin">
                {/* form  */}
                <DttProductAdd onAddProduct={DttHandleAddProduct} /></div>
          </section>
      </div>
  );
};

export default DttApp;
