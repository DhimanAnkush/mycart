import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeData } from "./Redux/action";
import './styles/body.css';
import { useParams } from "react-router-dom";

function Card() {

  const dispatch = useDispatch();

  

  useEffect(() => {
    fetch("http://localhost:8080/products")
    .then((res) => res.json())
    .then((res) => dispatch(storeData(res)))
    .catch((err) => dispatch(err))
  }, [])

  const data = useSelector((state:any) => state.data)

  interface Obj {
    id: number,
    product_name: string,
    rating: number,
    price: string,
    category: string,
    desc: string,
    reviews: []
  }

  return (
    <>
      {data.map((e: Obj) => {
        return <div className="item">
          <img src="data:image/jpeg;base64,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" className="productImage" />
          <span>
            <Link className="productLink" to={`/${e.id}`}>
              {/* Product Name */}{e.product_name}
            </Link>
          </span>
          <span className="productCategory">{e.category}</span>
         
          {/* Notice the $ before price. keep it dont edit it. eg: "$123" */}
          <span className="productPrice">${e.price}</span>
          {/* Notice the Ratings: text. don't edit it. eg: "Ratings: 3.5" */}
          <span className="productRating">Ratings: {e.rating}</span>
          {/* Show button here if item is already in the cart. otherwise show "Item Already in cart" */}
          {/*
        <div className="itemInCart">Item Already in cart</div> 
         OR
        <button className="productAddtoCart">
          Add to cart
        </button>
        */}
        </div>
      })}
    </>
  );
}

export { Card };
