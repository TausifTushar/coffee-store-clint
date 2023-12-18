import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
        const [singelData, setSingelData] = useState([])
    const {id} = useParams()
    console.log(id)

    useEffect(()=>{fetch(`http://localhost:5000/coffee/${id}`)
       .then(res=> res.json())
       .then(data=>setSingelData(data))
},[id])
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

// https://www.youtube.com/watch?v=AIcV6s95HOY&t=3268s
