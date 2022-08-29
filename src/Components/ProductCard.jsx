import React from "react";

const ProductCard = ({ product }) => {
  //   brand: "Apple";
  //   category: "smartphones";
  //   description: "An apple mobile which is nothing like apple";
  //   discountPercentage: 12.96;
  //   id: 1;
  //   images: (5)[
  //     ("https://dummyjson.com/image/i/products/1/1.jpg",
  //     "https://dummyjson.com/image/i/products/1/2.jpg",
  //     "https://dummyjson.com/image/i/products/1/3.jpg",
  //     "https://dummyjson.com/image/i/products/1/4.jpg",
  //     "https://dummyjson.com/image/i/products/1/thumbnail.jpg")
  //   ];
  //   price: 549;
  //   rating: 4.69;
  //   stock: 94;
  //   thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg";
  //   title: "iPhone 9";
  return (
    <div>
      {product.brand} <br />
      {product.category} <br />
      {product.description} <br />
      {product.discountPercentage} <br />
      {product.id} <br />
      {product.images.map((item, index) => {
        return (
          <div className="" key={index}>
            <img src={item} alt="" />
          </div>
        );
      })}{" "}
      <br />
      image end
      <hr />
      {product.price} <br />
      {product.rating} <br />
      {product.stock} <br />
      {product.thumbnail} <br />
      {product.title} <br />
      <hr />
      <hr />
    </div>
  );
};

export default ProductCard;
