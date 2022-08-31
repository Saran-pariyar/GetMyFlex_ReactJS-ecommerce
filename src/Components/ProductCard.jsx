import React, { useState } from "react";
import ProductFullDetail from "./ProductFullDetail";
import "../Assets/css/ProductCard.css";
import { Rating } from "react-simple-star-rating";
import { GiShoppingCart } from "react-icons/gi";

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

  //will show the section where we can see full details of item

  const [showDetails, setShowDetails] = useState(false);
  return (
    <section className="product-card-section">
      <figure className="product-image-section">
        <img src={product.images[0]} alt={product.title} />
      </figure>
      <figcaption className="text-section">
        <p className="product-title">{product.title.slice(0, 15) + "..."}</p>
        {/* <hr /> */}
        <p className="product-price">
          <span>Price:</span> ${product.price}{" "}
        </p>
        <p className="product-rating"> {product.rating} </p>
        <Rating readonly={true} initialValue={product.rating} />
        <p className="product-stock">
          <span>Stock : </span> {product.stock}{" "}
        </p>
        <p className="product-description">
          {product.description.slice(0, 35) + "..."}
        </p>
        <h />
        <button className="add-to-cart-btn">
          Add to cart
          <GiShoppingCart className="shopping-tray" />
        </button>
      </figcaption>
    </section>
  );
};

export default ProductCard;
