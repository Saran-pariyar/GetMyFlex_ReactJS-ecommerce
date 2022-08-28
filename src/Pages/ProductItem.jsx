import { useEffect, useState } from "react";
import "../Assets/css/ProductItem.css";

const ProductItem = ({ category }) => {
  //this will contain the parsed api data
  const [itemData, setItemData] = useState([]);

  //capitalize first letter of title
  const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  useEffect(() => {
    //func to get data from api
    const getData = async () => {
      const url = `https://dummyjson.com/products/category/${category}`;
      let data = await fetch(url);
      let parsedData = await data.json();

      //saving data in state var to use it below
      setItemData(parsedData.products);
    };

    //setting title into category name
    document.title = `${capitalizeFirstLetter(category)} - GetMyFlex`;
    getData();
  }, []);

  return (
    <section className="product-section">
      {category}
      {itemData.map((element, index) => {
        return (
          <div key={index}>
            {index} <br />
            {element.title} <br />
            {element.rating} <img src={element.images[1]} alt="" />
          </div>
        );
      })}
    </section>
  );
};

export default ProductItem;
