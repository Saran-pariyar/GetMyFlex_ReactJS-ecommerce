import React from "react";
import "../Assets/css/ProductFullDetail.css";

const ProductFullDetail = ({ item }) => {
  //   console.log(product);
  alert(item);
  console.log("hello");

  return (
    <div className="product-full-detail-section">
      <section className="product-detail">
        {item.brand} <br />
        {item.category} <br />
        {item.description} <br />
        {item.discountPercentage} <br />
        {item.id} <br />
        {item.images.map((item, index) => {
          return (
            <div className="" key={index}>
              <img src={item} alt="" />
            </div>
          );
        })}{" "}
        <br />
        image end
        <hr />
        {item.price} <br />
        {item.rating} <br />
        {item.stock} <br />
        {item.thumbnail} <br />
        {item.title} <br />
      </section>
    </div>
  );
};

export default ProductFullDetail;
