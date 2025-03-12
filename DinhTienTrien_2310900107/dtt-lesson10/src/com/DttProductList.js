import React from "react";

const DttProductList = ({ products }) => {
  return (
    <div>
      <h2 className="card-title">Danh sách Sản phẩm</h2>
      <div className="table-responsive mx-3">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên Sản phẩm</th>
              <th>Số số lượng</th>
              <th>Giá</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.DttpID}>
                <td>{product.DttpID}</td>
                <td>{product.DttpName}</td>
                <td>{product.DttpQuantity}</td>
                <td>{product.DttpPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DttProductList;
