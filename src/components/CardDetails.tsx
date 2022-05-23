import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeData } from "./Redux/action";
import { useParams } from "react-router-dom";

function CardDetails() {

  const params = useParams();
  const id = params.id;

  const dispatch = useDispatch()

  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then((res) => res.json())
      .then((res) => dispatch(storeData(res)))
      .catch((err) => dispatch(err))
  }, [])

  const data = useSelector((state: any) => state.data);

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
        <div className="product">
          <span>
            <h4 className="detailsTitle">{e.product_name}</h4>
          </span>
          <img className="detailsImage" src="" alt="" />
          {/* Notice the "Price: $". do not edit it. */}
          <span className="detailsPrice">Price: ${e.price}</span>
          <span className="detailsPrice"></span>
          <div>
            <h5>Reviews:</h5>
            {/* Iterate over reviews and populate review like: 
        
        <div className="review">
          <span className="reviewBy">UserName1234</span>
          <span className="reviewDesc">This product is really good etc....</span>
        </div>
        
        */}
          </div>
        </div>
      })}

    </>
  );
}
export { CardDetails };
