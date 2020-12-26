import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Products = (props) => {
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");

  function searchData(e) {
    setSearch(e.target.value);
  }
  function Select(e) {
    console.log(e);
    setSelect(e.target.value);
    if (e.target.value === "low-high") {
      props.setData(
        props.data.sort(function (a, b) {
          return a.price - b.price;
        })
      );
    }
    if (e.target.value === "high-low") {
      props.setData(
        props.data.sort(function (a, b) {
          return b.price - a.price;
        })
      );
    }
    if (e.target.value === "A-Z") {
      props.setData(
        props.data.sort(function (a, b) {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        })
      );
    }

    if (e.target.value === "Z-A") {
      props.setData(
        props.data.sort(function (a, b) {
          if (a.name > b.name) {
            return -1;
          }
          if (a.name < b.name) {
            return 1;
          }
          return 0;
        })
      );
    }
     console.log(select);
  }
 
  return (
    <div className="container">
      <div className='searchForm'>
        {" "}
        <input
          type="text"
          placeholder="search"
          className="search"
          onChange={searchData}
        />
        <select onChange={Select}>
          <option value="A-Z">Alphabetically A-Z</option>
          <option value="Z-A">Alphabetically Z-A</option>
          <option value="low-high">Price low to high</option>
          <option value="high-low"> Price high to low</option>
        </select>
      </div>
      <div className="infoPage">
        {props.data &&
          props.data
            .filter((result) => {
              return result.name.includes(search);
            })
            .map((product) => {
              return (
                <div key={product._id}className="productInfo">
                  <p className="productName">Name: {product.name}</p>
                  <p className="productPrice">Price: {product.price}</p>
                  <Link to="/info">
                    {" "}
                    <img
                      src={product.imgURL}
                      alt=""
                      className="productImage"
                      onClick={(e) => {
                        if (e.target.src === product.imgURL) {
                          props.setInfo(product);
                        }
                      }}
                    />
                  </Link>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Products;
